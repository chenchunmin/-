import moment from 'moment'
Page({
  data: {
    show: false,
    unused: [{
        nm: '新品优惠券', // 名称
        scale: '15', // 优惠券面值
        genre: '元', // 0:满减 1:折扣 
        full: '100', // 满多少元可以使用
        stats: 0, // 0:未使用 1:已使用 
        coupomStartTime: '2022.6.8', // 开始时间
        coupomEndTime: '2022.7.20', // 结束时间
        left: '/assets/coupon/left.png',
        right: '/assets/coupon/rightx.png',
        text: '/assets/coupon/dk.png',
      },
      {
        nm: '新品优惠券', // 名称
        scale: '88', // 优惠券面值
        genre: '折', // 0:满减 1:折扣 
        full: '100', // 满多少元可以使用
        stats: 0, // 0:未使用 1:已使用 
        coupomStartTime: '2022.6.8', // 开始时间
        coupomEndTime: '2022.7.20', // 结束时间
        left: '/assets/coupon/left.png',
        right: '/assets/coupon/rightx.png',
        text: '/assets/coupon/dk.png',
      },
      {
        nm: '新品优惠券', // 名称
        scale: '15', // 优惠券面值
        genre: '元', // 0:满减 1:折扣 
        full: '100', // 满多少元可以使用
        stats: 1, // 0:未使用 1:已使用 
        coupomStartTime: '2022.5.6', // 开始时间
        coupomEndTime: '2022.8.5', // 结束时间
        left: '/assets/coupon/lefty.png',
        right: '/assets/coupon/ry.png',
        text: '/assets/coupon/dk.png',
      },
      {
        nm: '新品优惠券', // 名称
        scale: '88', // 优惠券面值
        genre: '折', // 0:满减 1:折扣 
        full: '100', // 满多少元可以使用
        stats: 1, // 0:未使用 1:已使用 
        coupomStartTime: '2022.5.6', // 开始时间
        coupomEndTime: '2022.8.5', // 结束时间
        left: '/assets/coupon/lefty.png',
        right: '/assets/coupon/ry.png',
        text: '/assets/coupon/dk.png',
      },
      {
        nm: '新品优惠券', // 名称
        scale: '15', // 优惠券面值
        genre: '元', // 0:满减 1:折扣 
        full: '100', // 满多少元可以使用
        stats: 2, // 0:未使用 1:已使用 2:过期
        coupomStartTime: '2022.5.6', // 开始时间
        coupomEndTime: '2022.6.3', // 结束时间
        left: '/assets/coupon/leftx.png',
        right: '/assets/coupon/right.png',
        text: '/assets/coupon/dk.png',
      },
      {
        nm: '新品优惠券', // 名称
        scale: '88', // 优惠券面值
        genre: '折', // 0:满减 1:折扣 
        full: '100', // 满多少元可以使用
        stats: 2, // 0:未使用 1:已使用 2:过期
        coupomStartTime: '2022.5.6', // 开始时间
        coupomEndTime: '2022.6.3', // 结束时间
        left: '/assets/coupon/leftx.png',
        right: '/assets/coupon/right.png',
        text: '/assets/coupon/dk.png',
      },
    ],
  },

  detailHandler() {
    this.setData({
      show: true
    })
  },

  onClose() {
    this.setData({
      show: false
    })
  },

  pagedown() {
    wx.showToast({
      title: '领取成功',
      icon: 'none'
    })
    this.setData({
      show: false
    })
  }
})