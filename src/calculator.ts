import http from 'http';
import url from 'url';
import { program } from 'commander';
import * as dotenv from 'dotenv';
import { template } from './components/template/template.js';
dotenv.config();

program.option('-p, --port <char>');
program.parse();
const { port } = program.opts();

const portUser = port || process.env.PORT;
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

server.listen(portUser);
console.log('Listen on port ', portUser);
