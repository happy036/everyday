//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'张三',
    str:''
  },
  handleTap(){
    console.log(1111)
  },
  handleInput(e){
    // console.log(e)
    this.setData({
    str:e.detail.value
    })
  },
  handleArg(e){
    console.log(e)
  },
  handleRefresh(){
wx.startPullDownRefresh({
  success: (res) => {
    console.log(111)
  },
})

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    // console.log(res)
    if(res.from=='button'){
      console.log(res)
    }
    return{
      title:'分享',
    }
  }
})
