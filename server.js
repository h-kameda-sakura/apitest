// server.js (http版 + /test失敗)
const http = require('http');

const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  if (req.url === '/test') {
    const fail = Math.random() < 0.5;
    res.writeHead(fail ? 500 : 200, {'Content-Type':'application/json; charset=utf-8'});
    res.end(JSON.stringify({
      ok: !fail,
      message: fail ? 'intentional failure for test' : 'success'
    }));
    return;
  }

  // デフォルト /
  res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
  res.end('Hello from Node.js on port ' + port + '\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
