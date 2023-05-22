const http = require("http");
const {getHTML, getText, getComments, handleNotFound, postComment} = require('./handlers')


const PORT = 6000;

const comments = [
    {id: 100, text: 'First Pasha', author: 'Pasha'},
    {id: 101, text: 'Second Pasha', author: 'Vitalya'},
    {id: 102, text: 'Last Pasha', author: 'Valeriya'},
]

const server = http.createServer((req, res) => {
   console.log(req)
    res.end('Pasha start server')
});

server.listen(6000, () => {
    console.log(`Server Pasha done on port ${PORT}`)
})