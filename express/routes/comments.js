const express = require("express");
const {getCommentsPasha, postCommentsPasha, deleteCommentPasha, getCommentPasha} = require('../controllers/comments')


const router = express.Router()

router.get('/', getCommentsPasha)
router.post('/', postCommentsPasha);
router.get('/:commentId', getCommentPasha);
router.delete('/:commentId', deleteCommentPasha);


module.exports = router;