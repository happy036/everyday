// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: '综合',
        check: true
      },
      {
        id: 1,
        value: '销量',
        check: false
      },
      {
        id: 2,
        value: '价格',
        check: false
      },
    ],
    // 商品列表数据
    goodsList: [],
    // 图片
    img: "/images/12b513f40bd8b953f8b3c0642b966528.jpg!con"
  },
  // 组织后台接口需要的数据
  queryParams: {
    // 查询关键词
    query: "",
    // 分类ID
    cid: "",
    // 页数索引
    pagenum: 1,
    // 每页长度
    pagesize: 10
  },

  // 总页数
  totalPages: 1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //商品列表
    wx.setNavigationBarTitle({
      title: '商品列表',
    })
    // console.log(options);
    // 分类ID赋值
    this.queryParams.cid = options.cid

    this.handleGoodsListGet()
  },
  //获取商品列表数据
  handleGoodsListGet() {
    // 显示加载中
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    const _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/goods/search',
      data: _this.queryParams,
      success: (res) => {
        console.log(res);
        let {
          message,
          meta
        } = res.data
        if (meta.status == 200) {
          // 获取总条数
          const total = message.total
          // 计算总页数
          _this.totalPages = Math.ceil(total / _this.queryParams.pagesize)
          console.log(_this.totalPages);
          // 赋值
          _this.setData({
            // 拼接数组 
            goodsList: [...this.data.goodsList, ...message.goods]
          })
          // console.log(...[1,2,3]);
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        // 关闭正在等待的图标
        wx.hideLoading();
        // 关闭下拉刷新
        wx.stopPullDownRefresh();
      }
    })
  },
  handleTabsItemChange(e) {
    // console.log(e.detail.index);
    let index=e.currentTarget.dataset.index
    this.data.tabs.forEach((value, i) => i === index ? value.isActive = true : value.isActive = false)
    // 重新赋值
    this.setData({
      tabs: this.data.tabs
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
    // 重置页面数据
    this.setData({
      goodsList: []
    })
    // 重置页码为1
    this.queryParams.pagenum = 1
    // 重新刷新
    this.handleGoodsListGet()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 判断有没有下一页数据
    if (this.queryParams.pagenum >= this.totalPages) {
      // 显示消息提示框
      wx.showToast({
        title: '没有下一页啦!',
      })
    } else {
      // console.log('还有下一页数据');
      // 页数++
      this.queryParams.pagesize++
      this.handleGoodsListGet()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})