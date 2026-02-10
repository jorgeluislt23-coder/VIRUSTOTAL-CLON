const { validateHash } = require('../utils/validators');
const virusTotalService = require('../services/virusTotalService');

/**
 * Search by hash
 */
const searchByHash = async (req, res) => {
  try {
    const { hash } = req.params;

    const validation = validateHash(hash);
    if (!validation.valid) {
      return res.status(400).json({ 
        error: 'Invalid hash. Supported formats: MD5, SHA1, SHA256, SHA512' 
      });
    }

    // Search in VirusTotal
    const report = await virusTotalService.getFileReport(hash);

    res.json({
      success: true,
      hash,
      hashType: validation.type,
      report,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Hash search error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  searchByHash
};
