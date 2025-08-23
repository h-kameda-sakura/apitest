// server.js
const http = require('http');

const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
  res.end('Hello from Node.js on port ' + port + '\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
