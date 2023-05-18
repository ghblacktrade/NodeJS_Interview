const http = require("http");
const {getHTML, getText, getComments, handleNotFound, postComment} = require('./handlers')


const PORT = 3000;

const comments = [
    {id: 100, text: 'First Pasha', author: 'Pasha'},
    {id: 101, text: 'Second Pasha', author: 'Vitalya'},
    {id: 102, text: 'Last Pasha', author: 'Valeriya'},
]


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/http') {
       return getHTML(req, res)
    }

    if (req.method === 'GET' && req.url === '/text') {
       return getText(req, res)
    }

    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res)
    }

    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res)
    }

    res.statusCode = 404;
    handleNotFound(req, res)
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`)
});