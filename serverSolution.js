const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  // Create a worker thread to handle the request asynchronously
  const worker = new Worker('./worker.js', { workerData: { req, res } });

  worker.on('message', (result) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result);
  });

  worker.on('error', (err) => {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// worker.js
const { workerData, parentPort } = require('worker_threads');

// Simulate some work
const result = processRequest(workerData.req);

parentPort.postMessage(result);

function processRequest(req) { 
  //Simulate intensive operations
  let sum = 0;  
  for (let i = 0; i < 1000000000; i++) {  
    sum += i;  
  } 
  return 'Request processed!';
}