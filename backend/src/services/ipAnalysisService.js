const geoip = require('geoip-lite');
const dns = require('dns').promises;

class IPAnalysisService {
  /**
   * Get geolocation for IP
   * @param {string} ip - IP address
   * @returns {Object}
   */
  getGeoLocation(ip) {
    const geo = geoip.lookup(ip);
    if (!geo) {
      return { found: false };
    }

    return {
      found: true,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      coordinates: {
        latitude: geo.ll[0],
        longitude: geo.ll[1]
      },
      timezone: geo.timezone
    };
  }

  /**
   * Get reverse DNS for IP
   * @param {string} ip - IP address
   * @returns {Promise<Array<string>>}
   */
  async getReverseDNS(ip) {
    try {
      const hostnames = await dns.reverse(ip);
      return hostnames;
    } catch (error) {
      console.error('Reverse DNS error:', error.message);
      return [];
    }
  }

  /**
   * Comprehensive IP analysis
   * @param {string} ip - IP address
   * @returns {Promise<Object>}
   */
  async analyzeIP(ip) {
    const geolocation = this.getGeoLocation(ip);
    const reverseDNS = await this.getReverseDNS(ip);

    return {
      ip,
      geolocation,
      reverseDNS,
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = new IPAnalysisService();
