const https = require('https');
const url = require('url');
const jsonBody = require('body/json');
const fs = require('fs');
const services = require('./services');

const server = https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
});

server.on('request', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (req.method === 'GET' && parsedUrl.pathname === '/metadata') {
        const { id } = parsedUrl.query;
        const metadata = services.fetchImageMetadata(id);
        console.log(req.headers);
    } else if (req.method === 'GET' && parsedUrl.pathname === '/users') {
        jsonBody(req, res, (err, body) => {
            if (err) {
                console.error(err);
            } else {
                services.createUser(body['userName']);
            }    
        });
    } else {
        res.statusCode = 404;
        res.setHeader('X-Powered-By', 'Node');
        res.setHeader('Hello', 'World');
        res.end('This was served with https.');
    }
});

server.listen(443);
