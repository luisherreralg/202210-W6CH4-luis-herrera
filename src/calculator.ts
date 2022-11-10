import http from 'http';
import url from 'url';
import { template } from './components/template/template.js';
import { portHandler } from './services/portHandler/portHandler.js';

const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url as string, true).query;
    console.log(queryObject);

    if (queryObject.value1 === undefined || queryObject.value2 === undefined) {
        return response.end(
            '<h1>Invalid input</h1> <p>please use the following format: http://localhost:3000/?value1=1&value2=2 (replace 1 and 2 with your numbers)</p>'
        );
    }

    if (url.parse(request.url as string, true).pathname != '/calculator.js') {
        return response.end(`<h1>Error 404: File not found</h1>
        <p>Please use the following format: http://localhost:3500/calculator.js?value1=1&value2=2</p>`);
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(
        template(queryObject.value1 as string, queryObject.value2 as string)
    );

    // No tengo claro para qué se usa el end
    // response.end();
});

server.listen(portHandler());
console.log('Listen on port ', portHandler());
