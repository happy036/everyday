module.exports.showArticle = (req, res) => {
    // res.send("文章列表页面")
    res.render('article')
}

module.exports.editArticle = (req, res) => {
    // res.send("文章编辑")
    res.render('article-edit')
}