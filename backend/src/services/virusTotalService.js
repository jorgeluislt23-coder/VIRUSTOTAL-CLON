const axios = require('axios');
const config = require('../config');

class VirusTotalService {
  constructor() {
    this.apiKey = config.apiKeys.virustotal;
    this.baseUrl = 'https://www.virustotal.com/api/v3';
  }

  /**
   * Scan a file
   * @param {Buffer} fileBuffer - File buffer
   * @param {string} filename - Original filename
   * @returns {Promise<Object>}
   */
  async scanFile(fileBuffer, filename) {
    if (!this.apiKey) {
      throw new Error('VirusTotal API key not configured');
    }

    const FormData = require('form-data');
    const form = new FormData();
    form.append('file', fileBuffer, filename);

    try {
      const response = await axios.post(`${this.baseUrl}/files`, form, {
        headers: {
          'x-apikey': this.apiKey,
          ...form.getHeaders()
        }
      });
      return response.data;
    } catch (error) {
      console.error('VirusTotal file scan error:', error.message);
      throw error;
    }
  }

  /**
   * Get file analysis by hash
   * @param {string} hash - File hash (MD5, SHA1, or SHA256)
   * @returns {Promise<Object>}
   */
  async getFileReport(hash) {
    if (!this.apiKey) {
      throw new Error('VirusTotal API key not configured');
    }

    try {
      const response = await axios.get(`${this.baseUrl}/files/${hash}`, {
        headers: { 'x-apikey': this.apiKey }
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return { found: false };
      }
      console.error('VirusTotal file report error:', error.message);
      throw error;
    }
  }

  /**
   * Scan a URL
   * @param {string} url - URL to scan
   * @returns {Promise<Object>}
   */
  async scanUrl(url) {
    if (!this.apiKey) {
      throw new Error('VirusTotal API key not configured');
    }

    try {
      const response = await axios.post(
        `${this.baseUrl}/urls`,
        `url=${encodeURIComponent(url)}`,
        {
          headers: {
            'x-apikey': this.apiKey,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('VirusTotal URL scan error:', error.message);
      throw error;
    }
  }

  /**
   * Get URL analysis
   * @param {string} urlId - URL ID from scan
   * @returns {Promise<Object>}
   */
  async getUrlReport(urlId) {
    if (!this.apiKey) {
      throw new Error('VirusTotal API key not configured');
    }

    try {
      const response = await axios.get(`${this.baseUrl}/urls/${urlId}`, {
        headers: { 'x-apikey': this.apiKey }
      });
      return response.data;
    } catch (error) {
      console.error('VirusTotal URL report error:', error.message);
      throw error;
    }
  }

  /**
   * Get IP address information
   * @param {string} ip - IP address
   * @returns {Promise<Object>}
   */
  async getIpReport(ip) {
    if (!this.apiKey) {
      throw new Error('VirusTotal API key not configured');
    }

    try {
      const response = await axios.get(`${this.baseUrl}/ip_addresses/${ip}`, {
        headers: { 'x-apikey': this.apiKey }
      });
      return response.data;
    } catch (error) {
      console.error('VirusTotal IP report error:', error.message);
      throw error;
    }
  }

  /**
   * Get domain information
   * @param {string} domain - Domain name
   * @returns {Promise<Object>}
   */
  async getDomainReport(domain) {
    if (!this.apiKey) {
      throw new Error('VirusTotal API key not configured');
    }

    try {
      const response = await axios.get(`${this.baseUrl}/domains/${domain}`, {
        headers: { 'x-apikey': this.apiKey }
      });
      return response.data;
    } catch (error) {
      console.error('VirusTotal domain report error:', error.message);
      throw error;
    }
  }
}

module.exports = new VirusTotalService();
