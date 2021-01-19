// pages/goods_details/goods_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    // 轮播图数据
    showImg:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/goods/detail',
      data: {
        goods_id: options.goods_id
      },
      success(res) {
        console.log(res)
        that.setData({
          shopList: res.data.message,
          showImg:res.data.message.pics
        })
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