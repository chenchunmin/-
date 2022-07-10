// pages/estimate/estimate.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    heft:'',
    money: '',
    inputvalue: '',
    newarr: [],
    show: false,
    flse: false,
    radio: 1,
    canal: [
      { index: 0, text: '普通货物', name: 1, money: 59, cash: 39 },
      { index: 1, text: '电子产品', name: 2, money: 69, cash: 49 },
      { index: 2, text: '液体粉末', name: 3, money: 79, cash: 59 },
      { index: 3, text: '内地EMS', name: 4, money: 128, cash: 49 },
      { index: 4, text: '广东EMS', name: 5, money: 128, cash: 35 }
    ]
  },

  skyblue() {
    this.setData({
      show: true,
    })
  },

  green() {
    this.setData({
      flse: true,
    })
  },

  out() {
    this.setData({
      flse: false,
    })
  },

  onChange(e) {
    let newarr = this.data.canal.filter(v => v.name === e.detail)
    this.setData({
      radio: e.detail,
      show: false,
      newarr: newarr,
    });
  },

  onClose() {
    this.setData({ show: false });
  },

  bindkg(e) {
    this.setData({
      inputvalue: e.detail.value,
      heft:e.detail.value
    })
  },

  total() {
    this.data.newarr.filter(e => {
      let a = this.data.inputvalue - 1
      let b = a * e.cash + e.money
      this.setData({
        money: b,
        flse: false
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let e = { detail: 1 }
    let b = {detail: {value: "0"}}
    this.onChange(e)
    this.bindkg(b)
    this.setData({
      money: 0,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
})