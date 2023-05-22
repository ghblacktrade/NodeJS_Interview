const express = require('express')
const commentsRouter = require("./comments");
const usersRoute = require("./fileUsers");
const router  = express.Router()
const rootRouter = require("./root")


router.use('/comments', commentsRouter);
router.use('/users', usersRoute)
router.use('/', rootRouter)


module.exports = router;