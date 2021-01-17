// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧菜单
    cateList: [],
    // 右侧菜单
    cateListRight: [],
    // 选择的索引
    currentIndex: 0,
    // 滚动条的位置
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getClassifyData(this.data.currentIndex)
  },
  getClassifyData(index) {
    const _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/categories',
      method: 'GET',
      success(res) {
        // console.log(res)
        const { message, meta } = res.data
        if (meta.status == 200) {
          _this.setData({
            cateList: message,
            cateListRight: message[index].children
          })
        }
      }
    })
  },
  handleCateClick: function (e) {
    let index = e.currentTarget.dataset.index
    // console.log(index);
    this.setData({
      currentIndex: index,
      scrollTop: 0
    })
// console.log(this.data.currentIndex)
    this.getClassifyData(index)
  },
})