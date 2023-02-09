const http = require('http');
const url = require('url');

const server = http.createServer();
server.on('request', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (req.method === 'GET' && parsedUrl.pathname === '/metadata') {
        const { id } = parsedUrl.query;
        console.log(id);
    }
});

server.listen(8080);
