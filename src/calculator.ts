import http from 'http';
import url from 'url';
import { program } from 'commander';
import * as dotenv from 'dotenv';
dotenv.config();

program.option('-p, --port <char>');
program.parse();
const { port } = program.opts();

const portUser = port || process.env.PORT;
const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url as string, true).query;

    if (url.parse(request.url as string, true).pathname != '/calculator.js') {
        return response.end(`<h1>Error 404: File not found</h1>`);
    }

    const sum = Number(queryObject.value1) + Number(queryObject.value2);
    const resultSum = `${queryObject.value1} + ${queryObject.value2} = ${sum}`;

    const substract = Number(queryObject.value1) - Number(queryObject.value2);
    const resultSubstract = `${queryObject.value1} - ${queryObject.value2} = ${substract}`;

    const multiply = Number(queryObject.value1) * Number(queryObject.value2);
    const resultMultiply = `${queryObject.value1} * ${queryObject.value2} = ${multiply}`;

    const divide = Number(queryObject.value1) / Number(queryObject.value2);
    const resultDivide = `${queryObject.value1} / ${queryObject.value2} = ${divide}`;

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`<h1>CALCULADORA</h1>`);
    response.write(`<h2>${resultSum}</h2>`);
    response.write(`<h2>${resultSubstract}</h2>`);
    response.write(`<h2>${resultMultiply}</h2>`);
    response.write(`<h2>${resultDivide}</h2>`);

    // Me reinicia el servidor
    // response.end();
});

server.listen(portUser);
console.log('Listen on port ', portUser);
