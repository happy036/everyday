// index.js
// 获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图图片
    imgUrl: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    // 分类数据
    cateNav: [],
    // 楼层
    fool: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getSlideshowImg()
    this.getCateImg()
    this.getFoolData()
  },
  // 获取轮播图图片
  getSlideshowImg() {
    const _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/swiperdata',
      method: 'GET',
      success: function (res) {
        // console.log(res)
        const {
          meta,
          message
        } = res.data;
        let data = []
        message.forEach(element => {
          data.push(element.image_src)
        });
        // console.log(data)
        if (meta.status == 200) {
          _this.setData({
            imgUrl: data
          })
        }
        // console.log(_this.data.imgUrl)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  // 分类
  getCateImg() {
    const _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/catitems',
      method: 'GET',
      success(res) {
        console.log(res)
        const {
          meta,
          message
        } = res.data;
        let data = []
        message.forEach(element => {
          data.push(element.image_src)
        });
        // console.log(data)
        if (meta.status == 200) {
          _this.setData({
            cateImg: data,
            cateNav: message
          })
        }
      }
    })
  },
  // 楼层
  getFoolData() {
    const _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/floordata',
      method: 'GET',
      success(res) {
        console.log(res)
        const { message, meta } = res.data
        if (meta.status == 200) {
          _this.setData({
            fool: message
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
