
Page({

  // 初始数据
  data: {
  },

  // 监听页面加载
  onLoad: function (options) {
  },

  choiceWordindex:function () {
    this.setData({
      toView: 'load',
    })
  },

  // 用户点击右上角分享
  onShareAppMessage: function () {
    return {
      title: '快加入校园联谊吧！',
      path: '/pages/guide/guide',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  }
})