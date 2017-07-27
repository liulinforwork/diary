// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    swiperCurrent: 0,

    age:23,
    gender:0,
    info:{
      school:'四川大学',
      a:'外国语学院',
      b:'四川成都',
      c:'213',
      d:'12321',
      e:'我就是我。不一样的烟火,我就是我。'
    },
    label:[
      {
        title:'外形',
        list:['死宅男','喜欢动画片','最爱美剧','最爱大幅度美剧1','最爱美剧2','费点功夫的','23']
      },
      {
        title: '爱好',
        list: ['看电影', '吃饭', '睡瞌睡', '这幅画水粉或多或少', '睡瞌睡', '吃饭睡瞌睡', '吃饭', '睡', '撕得粉碎的', '睡瞌睡']
      },
      {
        title: '性格',
        list: ['四川', '喜马拉雅山', '泰国', '吃饭', '斯蒂芬', '吃饭', '睡瞌睡']
      },
      {
        title: '技能',
        list: ['柬埔寨', '越南', '斯蒂芬','柬埔寨']
      }
    ]
  },

  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  toGuide: function (event) {
    wx.navigateTo({
      url: '/pages/guide/guide'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    console.log(options.id);
    wx.request({
      url: 'http://test.appserver.com/activity/getSingEndTime', //仅为示例，并非真实的接口地址
      data: {
        x: '' ,
        y: ''
      },
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {
        var data = res.data;
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  }
})