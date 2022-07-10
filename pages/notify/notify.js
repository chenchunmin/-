// pages/notify/notify.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    disabled: true,
    time: 5,
    times: null
  },

  read() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.data.times = setInterval(() => {
      if (this.data.time == 0) {
        clearInterval(this.data.times)
        this.setData({
          disabled:false,
          time:''
        })
      } else {
        this.data.time--
        this.setData({
          time: this.data.time,
        })
      }
    }, 1000)
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