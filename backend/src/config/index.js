require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Database
  databaseUrl: process.env.DATABASE_URL,
  mongodbUri: process.env.MONGODB_URI,
  redisUrl: process.env.REDIS_URL,
  
  // API Keys
  apiKeys: {
    virustotal: process.env.VIRUSTOTAL_API_KEY,
    urlscan: process.env.URLSCAN_API_KEY,
    abuseipdb: process.env.ABUSEIPDB_API_KEY,
    shodan: process.env.SHODAN_API_KEY,
    googleSafeBrowsing: process.env.GOOGLE_SAFE_BROWSING_KEY,
    alienvault: process.env.ALIENVAULT_OTX_KEY,
    hybridAnalysis: process.env.HYBRID_ANALYSIS_KEY
  },
  
  // Storage
  uploadDir: process.env.UPLOAD_DIR || './uploads',
  maxFileSize: parseInt(process.env.MAX_FILE_SIZE) || 650000000,
  
  // Security
  jwtSecret: process.env.JWT_SECRET || 'change-this-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  
  // Rate Limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) || 900000,
    max: parseInt(process.env.RATE_LIMIT_MAX) || 100
  },
  
  // CORS
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3001',
  
  // Cache
  cacheTTL: parseInt(process.env.CACHE_TTL) || 3600
};
