const http = require('http');
const url = require('url');
const services = require('./services');
const jsonBody = require('body/json');

const server = http.createServer();
server.on('request', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (req.method === 'GET' && parsedUrl.pathname === '/metadata') {
        const { id } = parsedUrl.query;
        const metadata = services.fetchImageMetadata(id);
        console.log(req.headers);
    };
    jsonBody(req, res, (err, body) => {
        console.log(body);
    });
});

server.listen(8080);
