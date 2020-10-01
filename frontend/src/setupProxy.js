const { createProxyMiddleware} = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware(['/api', '/ws'], {
  target: 'http://localhost:5000',
  logLevel: 'debug',
  changeOrigin: true,
  ws: true
});

module.exports = function (app) {
  app.use(apiProxy);
};
