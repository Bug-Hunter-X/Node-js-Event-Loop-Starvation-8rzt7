# Node.js Event Loop Starvation Bug

This repository demonstrates a common, yet subtle, bug in Node.js applications: event loop starvation.  This occurs when asynchronous operations are not managed correctly, leading to performance issues or application crashes.  The example showcases a simple HTTP server that, under heavy load, might exhibit these problems.  The solution offers strategies to mitigate this issue.

## Bug

The `server.js` file contains a basic HTTP server. While functional, it lacks proper handling of asynchronous operations, potentially leading to event loop starvation under stress.  The issue is highlighted in the comments within the code.

## Solution

`serverSolution.js` demonstrates ways to address event loop starvation.  Techniques such as using promises, async/await, or worker threads can improve the efficiency of asynchronous operation handling.  The solution improves the handling of requests to prevent the server from becoming unresponsive under heavy load.