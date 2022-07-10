// pages/entire/entire.js
Page({
  data: {
    active: 0,
    title: [{
        text: '全部'
      },
      {
        text: '待支付'
      },
      {
        text: '已支付'
      },
      {
        text: '已完成'
      }
    ],
    order: [{
        id: 1,
        nm: 20220509140712345678,
        off: '中国',
        finish: '美国',
        state: 0, // 完成
        status: 3, // 完成tab
      },
      {
        id: 2,
        nm: 20220509140712345678,
        off: '中国',
        finish: '英国',
        state: 1, // 已支付
        status: 2, // 已支付tab
      },
      {
        id: 3,
        nm: 20220509140712345678,
        off: '中国',
        finish: '小日本',
        state: 2, // 待入仓
        status: 2, // 已支付tab
      },
      {
        id: 4,
        nm: 20220509140712345678,
        off: '中国',
        finish: '白俄罗斯',
        state: 3, // 已出仓
        status: 2, // 已支付tab
      },
      {
        id: 5,
        nm: 20220509140712345678,
        off: '中国',
        finish: '韩国',
        state: 4, // 待支付
        status: 1, // 待支付tab
      },
      {
        id: 6,
        nm: 20220509140712345678,
        off: '中国',
        finish: '俄国',
        state: 5, // 待填写
        status: 1, // 待支付tab
      },
    ],
    arr: []
  },

  onChange(e) {
    let index = e.detail.index
    console.log(index);
    this.setData({
      active: index
    })
    this.filters(index)
  },
  
  onLoad() {
    let index = 0
    this.filters(index)
  },

  // 过滤
  filters(index) {
    if (index === 0) {
      this.setData({
        arr: this.data.order
      })
      return
    }
    let data = this.data.order.filter(v => index === v.status)
    this.setData({
      arr: data
    })
  }


})