const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://node.ftvrealestate.in:8089',
      changeOrigin: true,
    })
  );
};