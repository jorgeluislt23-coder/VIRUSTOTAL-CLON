const { isValidUrl } = require('../utils/validators');
const virusTotalService = require('../services/virusTotalService');
const urlScanService = require('../services/urlScanService');

/**
 * Scan a URL
 */
const scanUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url || !isValidUrl(url)) {
      return res.status(400).json({ error: 'Invalid URL provided' });
    }

    // Scan with multiple services
    const results = {
      url,
      scans: {}
    };

    // VirusTotal scan
    try {
      const vtResult = await virusTotalService.scanUrl(url);
      results.scans.virustotal = vtResult;
    } catch (error) {
      console.error('VirusTotal URL scan error:', error.message);
      results.scans.virustotal = { error: error.message };
    }

    // URLScan.io scan
    try {
      const urlscanResult = await urlScanService.scanUrl(url);
      results.scans.urlscan = urlscanResult;
    } catch (error) {
      console.error('URLScan error:', error.message);
      results.scans.urlscan = { error: error.message };
    }

    res.json({
      success: true,
      ...results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('URL scan error:', error);
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get URL report
 */
const getUrlReport = async (req, res) => {
  try {
    const { urlId } = req.params;

    if (!urlId) {
      return res.status(400).json({ error: 'URL ID required' });
    }

    const report = await virusTotalService.getUrlReport(urlId);

    res.json({
      success: true,
      urlId,
      report,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Get URL report error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  scanUrl,
  getUrlReport
};
