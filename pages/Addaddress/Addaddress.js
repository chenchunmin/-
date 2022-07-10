// pages/Addaddress/Addaddress.js
Page({
  data: {
    checked: false,
    name: '',
    phone: '',
    ress: '',
    city: '',
    postcode: '',
    phoneError: '',
    ressError: '',
    cityError: '',
    nameError: '',
    country: '',
    countryError: '',
  },

  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({
      checked: detail
    });
    console.log(detail);
  },

  // 校验姓名
  regeinput() {
    wx.showToast({
      title: '姓名只能2到8位（字母，数字，下划线，减号）',
      icon: 'none'
    })
  },
  bindinput(e) {
    this.setData({
      name: e.detail
    })
    const uPattern = /^[a-zA-Z0-9_-]{2,8}$/;
    if (this.data.name !== 0 && !uPattern.test(this.data.name)) {
      this.setData({
        nameError: '姓名只能2到8位（字母，数字，下划线，减号）',
      })
    } else {
      this.setData({
        nameError: '',
      })
    }
  },

  //校验手机号
  bindphone(e) {
    this.setData({
      phone: e.detail
    })
    const rege = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
    if (this.data.phone.length !== 0 && this.data.phone.length !== 11) {
      this.setData({
        phoneError: '手机长度有误',
      })
    } else if (this.data.phone.length !== 0 && !rege.test(this.data.phone)) {
      this.setData({
        phoneError: '手机号有误',
      })
    } else {
      this.setData({
        phoneError: '',
        phoneError: '',
        disabled: false
      })
    }
  },

  // 校验地址
  bindress(e) {
    this.setData({
      ress: e.detail
    })
    const reg = /^[0-9A-Za-z\s]+$/g
    if (this.data.ress.length > 30 || !reg.test(this.data.ress)) {
      this.setData({
        ressError: '请输入正确的地址格式',
      })
    } else {
      this.setData({
        ressError: '',
      })
    }
  },

  // 校验国家
  bindcity(e) {
    this.setData({
      city: e.detail
    })
    const reg = /[^\a-\z\A-\Z]/g
    if (this.data.city.length !== 0 && reg.test(this.data.city)) {
      this.setData({
        cityError: '必须是英文',
      })
    } else {
      this.setData({
        cityError: '',
      })
    }
  },

  // 校验城市
  bindcountry(e) {
    this.setData({
      country: e.detail
    })
    const reg = /[^\a-\z\A-\Z]/g
    if (this.data.country.length !== 0 && reg.test(this.data.country)) {
      this.setData({
        countryError: '必须是英文',
      })
    } else {
      this.setData({
        countryError: '',
      })
    }
  },

})