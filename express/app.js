const http = require('http');
const express = require('express');


const app = express();

app.get('/', (req, res) => res.send('Response pasha server'))


const server = http.createServer(app)

server.listen(3000, () => console.log('pasha done'))