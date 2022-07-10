// pages/my/my.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '羊羊',
    code: '编码：HBK'
  },

  notify() {
    wx.navigateTo({
      url: '/pages/notify/notify',
    })
  },

  entire() {
    wx.switchTab({
      url: '/pages/entire/entire',
    })
  },

  skip() {
    wx.navigateTo({
      url: '/pages/Myaddress/Myaddress',
    })
  },

  // 我的优惠券
  mynotify() {
    wx.navigateTo({
      url: '/pages/Mycoupon/Mycoupon',
    })
  },

  activity() {
    wx.navigateTo({
      url: '/pages/activity/activity',
    })
  },

  tet() {
    wx.navigateTo({
      url: '/pages/flow/flow',
    })
  },

  Orderinfo(e) {
    console.log(e.currentTarget.dataset.index);
    wx.switchTab({
      url: `/pages/entire/entire?index`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})