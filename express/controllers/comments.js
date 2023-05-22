const getCommentsPasha = (req, res) => {
    res.send('get comments Pasha');
};
const postCommentsPasha = (req, res) => {
    res.send('post pasha route');
};

const getCommentPasha = (req, res) => {
    console.log(req.params);
};

const deleteCommentPasha = (req, res) => {
    res.send('delete comments Pasha');
};

module.exports = {
    getCommentsPasha,
    postCommentsPasha,
    deleteCommentPasha,
    getCommentPasha
}