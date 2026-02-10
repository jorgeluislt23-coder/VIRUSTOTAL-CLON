const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const config = require('../config');
const { calculateHashes } = require('../utils/hash');
const { getFileInfo, validateFileSize } = require('../utils/fileUtils');
const virusTotalService = require('../services/virusTotalService');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = config.uploadDir;
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      cb(null, uploadDir);
    } catch (error) {
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: config.maxFileSize },
  fileFilter: (req, file, cb) => {
    cb(null, true);
  }
});

/**
 * Upload and scan file
 */
const scanFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = req.file.path;
    const originalName = req.file.originalname;

    // Calculate hashes
    const hashes = await calculateHashes(filePath);
    
    // Get file info
    const fileInfo = await getFileInfo(filePath, originalName);

    // Scan with VirusTotal
    let vtResult = null;
    try {
      const fileBuffer = await fs.readFile(filePath);
      vtResult = await virusTotalService.scanFile(fileBuffer, originalName);
    } catch (error) {
      console.error('VirusTotal scan error:', error.message);
    }

    // Clean up uploaded file after scanning
    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.error('File cleanup error:', error.message);
    }

    res.json({
      success: true,
      file: {
        ...fileInfo,
        hashes
      },
      scan: vtResult || { status: 'API not configured' },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('File scan error:', error);
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get file report by hash
 */
const getFileReport = async (req, res) => {
  try {
    const { hash } = req.params;

    if (!hash || hash.length < 32) {
      return res.status(400).json({ error: 'Invalid hash provided' });
    }

    const report = await virusTotalService.getFileReport(hash);

    res.json({
      success: true,
      hash,
      report,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Get file report error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  upload,
  scanFile,
  getFileReport
};
