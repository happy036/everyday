// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
colorList:[],
isLoading:false
  },
  // 获取随机颜色
  RandomColor:function(){
    wx.showLoading({
      title: '数据加载中',
    })
    this.setData({
      isLoading:true
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method:'GET',
      success:(res)=>{
        // console.log(res)
        this.setData({
          colorList:[...this.data.colorList,...res.data.data]
        })
      },
      complete:()=>{
        wx.hideLoading();
        // 数据请求完成
        this.setData({
          isLoading:false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.RandomColor()
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
    // 节流处理
    if(this.data.isLoading) return;
this.RandomColor()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})