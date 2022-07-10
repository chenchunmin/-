// pages/nation/nation.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    number: [
      { index: 'A' },
      { index: 'B' },
    ],
    nation: [
      { "id": "1", "fullName": "阿拉伯", "initialsName": "A" },
      { "id": "2", "fullName": "埃及", "initialsName": "A" },
      { "id": "3", "fullName": "阿富汗", "initialsName": "A" },
      { "id": "4", "fullName": "不丹", "initialsName": "B" },
      { "id": "5", "fullName": "巴林王国", "initialsName": "B" },
      { "id": "6", "fullName": "白俄罗斯", "initialsName": "B" },
      { "id": "6", "fullName": "白俄罗斯", "initialsName": "B" },
      { "id": "6", "fullName": "白俄罗斯", "initialsName": "B" },
    ],
    arr: []
  },

  onLoad(options) {
    this.filters()
  },

  // 城市
  filters() {
    const _this = this
    _this.data.number.filter(e => {
      const index = e.index
      let data = _this.data.nation.filter(v => v.initialsName === index)
      this.setData({
        arr: data
      })
    })
  },

  // 选择国家
  onSearch(e) {
    let data = e.currentTarget.dataset.info
    wx.setStorageSync('key', data)
    wx.navigateBack({
      changed: true,
    })
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