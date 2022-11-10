import http from 'http';
import url from 'url';
import { template } from './components/template/template.js';
import { portHandler } from './services/portHandler/portHandler.js';

const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url as string, true).query;
    console.log(queryObject);
    if (url.parse(request.url as string, true).pathname != '/calculator.js') {
        return response.end(`<h1>Error 404: File not found</h1>`);
    }
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(
        template(queryObject.value1 as string, queryObject.value2 as string)
    );

    // Me reinicia el servidor
    // response.end();
});

server.listen(portHandler());
console.log('Listen on port ', portHandler());
