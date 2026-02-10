const dns = require('dns').promises;
const whois = require('node-whois');

class DomainAnalysisService {
  /**
   * Get DNS records for domain
   * @param {string} domain - Domain name
   * @returns {Promise<Object>}
   */
  async getDNSRecords(domain) {
    const records = {};

    try {
      // A records
      try {
        records.A = await dns.resolve4(domain);
      } catch (e) {
        records.A = [];
      }

      // AAAA records
      try {
        records.AAAA = await dns.resolve6(domain);
      } catch (e) {
        records.AAAA = [];
      }

      // MX records
      try {
        records.MX = await dns.resolveMx(domain);
      } catch (e) {
        records.MX = [];
      }

      // NS records
      try {
        records.NS = await dns.resolveNs(domain);
      } catch (e) {
        records.NS = [];
      }

      // TXT records
      try {
        records.TXT = await dns.resolveTxt(domain);
      } catch (e) {
        records.TXT = [];
      }

      // CNAME records
      try {
        records.CNAME = await dns.resolveCname(domain);
      } catch (e) {
        records.CNAME = [];
      }

      return records;
    } catch (error) {
      console.error('DNS lookup error:', error.message);
      return { error: error.message };
    }
  }

  /**
   * Get WHOIS information
   * @param {string} domain - Domain name
   * @returns {Promise<Object>}
   */
  async getWhois(domain) {
    return new Promise((resolve, reject) => {
      whois.lookup(domain, (err, data) => {
        if (err) {
          console.error('WHOIS lookup error:', err.message);
          resolve({ error: err.message });
        } else {
          resolve({ data });
        }
      });
    });
  }

  /**
   * Comprehensive domain analysis
   * @param {string} domain - Domain name
   * @returns {Promise<Object>}
   */
  async analyzeDomain(domain) {
    const [dnsRecords, whoisInfo] = await Promise.all([
      this.getDNSRecords(domain),
      this.getWhois(domain)
    ]);

    return {
      domain,
      dns: dnsRecords,
      whois: whoisInfo,
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = new DomainAnalysisService();
