const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    error: {
      message,
      status,
      timestamp: new Date().toISOString(),
      path: req.path
    }
  });
};

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = { errorHandler, asyncHandler };
