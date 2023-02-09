const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
    console.log(req.method, req.url);
});

server.listen(8080);
