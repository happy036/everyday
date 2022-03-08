const { getCategorysInfo, plusSubcategory, plusOnecategory, deleteSubCategory, editOneCateInfo, editSubCateInfo, getOneCate } = require('../controller/category')

const router = require('koa-router')()
router.prefix('/category')
router.get('/categorys', getCategorysInfo)
router.get('/addSubCate', plusSubcategory)
router.get('/addOneCate', plusOnecategory)
router.get('/delSubCategory', deleteSubCategory)
router.get('/editOneCate', editOneCateInfo)
router.get('/editSubCate', editSubCateInfo)
router.get('/getOneCate', getOneCate)
module.exports = router