const express = require('express')
const postEditRouter = express.Router()
postEditRouter.get('/postedit', (req, res) => {
    res.render('post-edit')
})

module.exports = postEditRouter