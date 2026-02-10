const { isValidDomain } = require('../utils/validators');
const virusTotalService = require('../services/virusTotalService');
const domainAnalysisService = require('../services/domainAnalysisService');

/**
 * Analyze a domain
 */
const analyzeDomain = async (req, res) => {
  try {
    const { domain } = req.body;

    if (!domain || !isValidDomain(domain)) {
      return res.status(400).json({ error: 'Invalid domain provided' });
    }

    // Analyze with multiple services
    const results = {
      domain,
      analysis: {}
    };

    // Basic domain analysis (DNS, WHOIS)
    try {
      const basicAnalysis = await domainAnalysisService.analyzeDomain(domain);
      results.analysis.basic = basicAnalysis;
    } catch (error) {
      console.error('Basic domain analysis error:', error.message);
      results.analysis.basic = { error: error.message };
    }

    // VirusTotal domain report
    try {
      const vtResult = await virusTotalService.getDomainReport(domain);
      results.analysis.virustotal = vtResult;
    } catch (error) {
      console.error('VirusTotal domain analysis error:', error.message);
      results.analysis.virustotal = { error: error.message };
    }

    res.json({
      success: true,
      ...results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Domain analysis error:', error);
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get domain report
 */
const getDomainReport = async (req, res) => {
  try {
    const { domain } = req.params;

    if (!domain || !isValidDomain(domain)) {
      return res.status(400).json({ error: 'Invalid domain' });
    }

    const report = await virusTotalService.getDomainReport(domain);

    res.json({
      success: true,
      domain,
      report,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Get domain report error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  analyzeDomain,
  getDomainReport
};
