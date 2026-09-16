const http = require('http');
const PORT = 3005;
const server = http.createServer((req, res) => {
    console.log('Request received:', req.method, req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-powered-By', 'Node.js');
    res.end('Hello, World!\n');
});
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});