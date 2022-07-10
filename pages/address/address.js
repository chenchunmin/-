// pages/address/address.js
Page({
  data: {
    address: {
      person: "领头羊",
      over: "深圳市龙华区龙华街道工业路壹城环智中心C座2607室",
      phone: "18688880130",
    },
    echo: {},
    phoneError: '',
    ressError: '',
    cityError: '',
    nameError: '',
    disabled: true
  },
  // 复制
  copyaddress() {
    const address = this.data.address
    const addressArr = Object.keys(address).map(key => address[key]).join(',')
    wx.setClipboardData({
      data: addressArr,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: "none",
          mask: "true"
        })
      }
    })
  },
  // 校验用户名
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
        disabled: true
      })
    } else {
      this.setData({
        nameError: '',
        disabled: false
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
        disabled: true
      })
    } else if (this.data.phone.length !== 0 && !rege.test(this.data.phone)) {
      this.setData({
        phoneError: '手机号有误',
        disabled: true
      })
    } else {
      this.setData({
        phoneError: '',
        phoneError: '',
        disabled: false
      })
    }
  },
  // 校验详细地址
  bindress(e) {
    this.setData({
      ress: e.detail
    })
    const reg = /^[0-9A-Za-z\s]+$/g
    if (this.data.ress.length > 30 || !reg.test(this.data.ress)) {
      this.setData({
        ressError: '请输入正确的地址格式',
        disabled: true
      })
    } else {
      this.setData({
        ressError: '',
        disabled: false
      })
    }
  },
  // 校验国家
  bindcity(e) {
    this.setData({
      city: e.detail
    })
    const reg = /[^\a-\z\A-\Z]/g
    // const reg = /^[1-9]\\d{5}$"/
    if (this.data.city.length !== 0 && reg.test(this.data.city)) {
      this.setData({
        cityError: '国家必须是英文',
        disabled: true
      })
    } else {
      this.setData({
        cityError: '',
        disabled: false
      })
    }
  },
  // 立即转运
  send(e) {
    wx.navigateTo({
      url: '/pages/notify/notify',
    })
  },
  // 选择地址
  opt() {
    wx.navigateTo({
      url: '/pages/Myaddress/Myaddress',
    })
  },
  onLoad(option) {
    if (option.arr) {
      const arr = JSON.parse(option.arr)
      this.setData({
        echo: arr,
        disabled: false
      })
    }

  },
})