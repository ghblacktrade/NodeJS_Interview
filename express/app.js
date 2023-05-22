const http = require('http');
const express = require('express');


const app = express();

const getRootPasha = (req, res) => {
    res.send('Response from Pasha')
}

const getCommentsPasha = (req, res) => {
    res.send('get comments Pasha')
}
const postCommentsPasha = (req, res) => {
    res.send('post pasha route')
}

app.get('/', getRootPasha)
app.get('/comments', getCommentsPasha)
app.post('/comments', postCommentsPasha)


app.listen(3000, () => console.log('Pasha done'))