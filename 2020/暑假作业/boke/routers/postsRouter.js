const express = require('express')
const postsRouter = express.Router()
postsRouter.get('/posts', (req, res) => {
    res.render('posts')
})

module.exports = postsRouter