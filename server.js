const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This is an example of a simple Node.js server.  The error is subtle and may not occur in all environments.  It has to do with event loop starvation, where asynchronous operations are not handled efficiently leading to performance issues or unexpected behavior.