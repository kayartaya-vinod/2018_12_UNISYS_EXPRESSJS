const http = require('http');
const fs = require('fs');

// the callback to the createServer() is executed whenever
// an HTTP client makes  request
const server = http.createServer((req, resp) => {
    console.log('Got a request for', req.url);

    switch (req.url.toLocaleLowerCase()) {
        case '/':
            // send home.html content from ./static-content/ folder
            fs.readFile('./static-content/home.html', 'utf-8', (err, data) => {
                resp.setHeader('Content-Type', 'text/html');
                resp.end(data);
            });
            break;
        case '/author-info':
            // send JSON data containing author infomration
            let author = {};
            author.name = 'Vinod';
            author.email = 'vinod@vinod.co';
            author.phone = '9731424784';
            resp.setHeader('Content-Type', 'application/json');
            resp.end(JSON.stringify(author));
            break;
        case '/help':
            // send some help content
            resp.end('Sorry! No help available at this time.');
            break;
        default:
        // send error response 404
        resp.statusCode = 404
        resp.end('OOPS! Page you are looking for does not exist!');
    }

    // the end() method response, writes the content and closes
    // the output stream. If not called, then the client will 
    // still be waiting for an output from the server
    // resp.end('Hello, friend!!');
});

const port = 3000;

server.listen(port, () => console.log(`Server started at localhost:${port}`));
console.log('Starting the server...');