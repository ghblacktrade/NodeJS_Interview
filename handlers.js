const comments = require('/data')

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader('ContentType', 'text/html');
    res.write('<html><body><div>');
    res.write('</div></body></html>');
    return res.end();
}

function getText(req, res) {
    res.statusCode = 200
    res.setHeader('content-type', 'text/plain')
    return res.end('this is plain')
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(comments));
}

function postComment(req, res) {
    let comment = '';

    req.on('data', (chunk) => comment += chunk)

    req.on('end', () => {
        console.log(comment)
        res.statusCode = 200
        res.end('Pasha received')
    })
}

function handleNotFound(req, res) {
    res.setHeader('Content-Type', 'text/html');
    return res.end('<h1>Page not found</h1>');
}

module.exports = {
    getHTML,
    getText,
    getComments,
    postComment,
    handleNotFound
}