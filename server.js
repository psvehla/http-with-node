const http = require('http');
const url = require('url');
const services = require('./services');

const server = http.createServer();
server.on('request', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (req.method === 'GET' && parsedUrl.pathname === '/metadata') {
        const { id } = parsedUrl.query;
        const metadata = services.fetchImageMetadata(id);
        console.log(req.headers);
    };
    const body = [];
    req.on('data', (chunk) => {
        console.log('this is a chunk \n');
        console.log(chunk.toString());
    });
});

server.listen(8080);
