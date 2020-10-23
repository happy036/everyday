const express = require('express')
const postAddRouter = express.Router()
postAddRouter.get('/postadd', (req, res) => {
    res.render('post-add')
})

module.exports = postAddRouter