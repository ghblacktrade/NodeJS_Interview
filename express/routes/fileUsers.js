const express = require('express')
const {getUsersPasha, postUsersPasha, getSingleUserPasha} = require('../controllers/users')


const router = express.Router()

router.get('/', getUsersPasha);
router.post('/', postUsersPasha);
router.get('/:userId', getSingleUserPasha);

module.exports = router;