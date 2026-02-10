const { isValidIP } = require('../utils/validators');
const virusTotalService = require('../services/virusTotalService');
const abuseIPDBService = require('../services/abuseIPDBService');
const ipAnalysisService = require('../services/ipAnalysisService');

/**
 * Analyze an IP address
 */
const analyzeIP = async (req, res) => {
  try {
    const { ip } = req.body;

    if (!ip || !isValidIP(ip)) {
      return res.status(400).json({ error: 'Invalid IP address provided' });
    }

    // Analyze with multiple services
    const results = {
      ip,
      analysis: {}
    };

    // Basic IP analysis (geolocation, reverse DNS)
    try {
      const basicAnalysis = await ipAnalysisService.analyzeIP(ip);
      results.analysis.basic = basicAnalysis;
    } catch (error) {
      console.error('Basic IP analysis error:', error.message);
      results.analysis.basic = { error: error.message };
    }

    // VirusTotal IP report
    try {
      const vtResult = await virusTotalService.getIpReport(ip);
      results.analysis.virustotal = vtResult;
    } catch (error) {
      console.error('VirusTotal IP analysis error:', error.message);
      results.analysis.virustotal = { error: error.message };
    }

    // AbuseIPDB check
    try {
      const abuseResult = await abuseIPDBService.checkIp(ip);
      results.analysis.abuseipdb = abuseResult;
    } catch (error) {
      console.error('AbuseIPDB error:', error.message);
      results.analysis.abuseipdb = { error: error.message };
    }

    res.json({
      success: true,
      ...results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('IP analysis error:', error);
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get IP report
 */
const getIPReport = async (req, res) => {
  try {
    const { ip } = req.params;

    if (!ip || !isValidIP(ip)) {
      return res.status(400).json({ error: 'Invalid IP address' });
    }

    const report = await virusTotalService.getIpReport(ip);

    res.json({
      success: true,
      ip,
      report,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Get IP report error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  analyzeIP,
  getIPReport
};
