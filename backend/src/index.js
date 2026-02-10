const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config');
const routes = require('./routes');
const { errorHandler } = require('./middleware/errorHandler');
const { rateLimiter } = require('./middleware/rateLimiter');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));

// Logging
app.use(morgan('dev'));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
app.use(rateLimiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`🚀 VirusTotal Clone API running on port ${PORT}`);
  console.log(`📝 Environment: ${config.nodeEnv}`);
  console.log(`🔒 CORS enabled for: ${config.corsOrigin}`);
});

module.exports = app;
