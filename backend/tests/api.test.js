const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  describe('GET /health', () => {
    it('should return health status', async () => {
      const res = await request(app)
        .get('/health')
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(res.body).toHaveProperty('status', 'ok');
      expect(res.body).toHaveProperty('timestamp');
    });
  });

  describe('POST /api/url/scan', () => {
    it('should reject invalid URL', async () => {
      const res = await request(app)
        .post('/api/url/scan')
        .send({ url: 'not-a-valid-url' })
        .expect('Content-Type', /json/)
        .expect(400);
      
      expect(res.body).toHaveProperty('error');
    });

    it('should accept valid URL', async () => {
      const res = await request(app)
        .post('/api/url/scan')
        .send({ url: 'https://example.com' })
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(res.body).toHaveProperty('success', true);
      expect(res.body).toHaveProperty('url', 'https://example.com');
    });
  });

  describe('POST /api/ip/analyze', () => {
    it('should reject invalid IP', async () => {
      const res = await request(app)
        .post('/api/ip/analyze')
        .send({ ip: 'not-an-ip' })
        .expect('Content-Type', /json/)
        .expect(400);
      
      expect(res.body).toHaveProperty('error');
    });

    it('should accept valid IP', async () => {
      const res = await request(app)
        .post('/api/ip/analyze')
        .send({ ip: '8.8.8.8' })
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(res.body).toHaveProperty('success', true);
      expect(res.body).toHaveProperty('ip', '8.8.8.8');
    });
  });

  describe('POST /api/domain/analyze', () => {
    it('should reject invalid domain', async () => {
      const res = await request(app)
        .post('/api/domain/analyze')
        .send({ domain: 'not a domain' })
        .expect('Content-Type', /json/)
        .expect(400);
      
      expect(res.body).toHaveProperty('error');
    });

    it('should accept valid domain', async () => {
      const res = await request(app)
        .post('/api/domain/analyze')
        .send({ domain: 'example.com' })
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(res.body).toHaveProperty('success', true);
      expect(res.body).toHaveProperty('domain', 'example.com');
    });
  });

  describe('GET /api/search/:hash', () => {
    it('should reject invalid hash', async () => {
      const res = await request(app)
        .get('/api/search/invalid-hash')
        .expect('Content-Type', /json/)
        .expect(400);
      
      expect(res.body).toHaveProperty('error');
    });

    it('should accept valid MD5 hash', async () => {
      const res = await request(app)
        .get('/api/search/d41d8cd98f00b204e9800998ecf8427e')
        .expect('Content-Type', /json/);
      
      // May return 500 if VirusTotal API is not configured, but hash should be validated
      expect(res.body).toHaveProperty('hash', 'd41d8cd98f00b204e9800998ecf8427e');
    });
  });
});
