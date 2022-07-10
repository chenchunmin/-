// pages/Addaddress/Addaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    addData: [
      { id: 1, nm: '小羊', phone: '18664673990', ress: ' MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON AZ 85705 USA ', City: 'USE', PostCode: 515134 },
      { id: 2, nm: '小陈', phone: '13592830633', ress: ' MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON AZ 85705 USA ', City: 'USE', PostCode: 515134 },
      { id: 3, nm: '小张', phone: '13763300229', ress: ' MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON AZ 85705 USA ', City: 'USE', PostCode: 515134 },
    ]
  },

  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },

  add() {
    wx.navigateTo({
      url: '/pages/Addaddress/Addaddress',
    })
  },

  address() {
    wx.navigateTo({
      url: '/pages/Addaddress/Addaddress',
    })
  },

  voluation(e) {
    let id = e.currentTarget.dataset.id
    let newarr = this.data.addData.filter(v => v.id === id)[0]
    wx.navigateTo({
      url: `/pages/address/address?arr=${JSON.stringify(newarr)}`,
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