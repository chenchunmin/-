// 获取应用实例
const app = getApp()
Page({
  data: {
    show: false,
    flag: 0,
    select: '',
    canal: [
      { index: 0, text: '普通货物' },
      { index: 1, text: '电子产品' },
      { index: 2, text: '液体粉末' },
      { index: 3, text: '内地EMS' },
      { index: 4, text: '广东EMS' }
    ]
  },

  onShow() {
    this.setData({
      select: wx.getStorageSync('key') ? wx.getStorageSync('key') : '英国'
    })
  },

  immtransfer(e) {
    this.setData({
      show: true,
    });
  },

  onClose() {
    this.setData({
      show: false
    });
  },

  changeflag(e) {
    this.setData({
      flag: e.target.dataset.index
    })
  },
  // 转运须知
  transfer() {
    wx.navigateTo({
      url: '/pages/notify/notify',
    })
  },

  pagedown() {
    this.setData({
      show: false
    });
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },

  Copyaddress() {
    wx.navigateTo({
      url: '/pages/copy/copy',
    })
  },
  
  // 国家
  select() {
    wx.navigateTo({
      url: '/pages/nation/nation',
    })
  },

  estimate(){
    wx.navigateTo({
      url: '/pages/estimate/estimate',
    })
  }
})