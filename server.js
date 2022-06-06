var connect = require('connect');
var serveStatic = require('serve-static');

connect()
  .use(serveStatic(__dirname))
  .listen(5001, () => console.log('Server running on 5001...'));
