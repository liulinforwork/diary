/* pages/activity/activity.js */

const comm = require("./../../utils/common");
var WxParse = require('./../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.request({
      url: comm.portUrl+'/api/university/activity/detail',
      data: {
        // activityId:$.getUrlParam('activityId')
        activityId:1
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      //header: {"Content-Type":"application/x-www-form-urlencoded"}, // 设置请求的 header
      success: function(res){
        console.log(JSON.stringify(res));
      },
      fail: function(res) {
        console.log(JSON.stringify(res));
      },
      complete: function() {
        // complete
      }
    });

    var html = '<div>我是HTML代码我是HTML代码我是HTML代码我是HTML代码我是HTML代码' +
        '<img src="./../../images/2.jpg" alt="图片加载失败">' +
        '<h1>这里是标题</h1><img src="./../../images/3.png" alt="">' +
        '<h1>这里是标题2</h1><img src="./../../images/4.png" alt=""><div>我是HTML代码我是HTML代码我是HTML代码我是HTML代码我是HTML代码</div>' +
        '<img src="./../../images/1.jpg" alt="图片加载失败"></div>';
    var that = this;
    WxParse.wxParse('article', 'html', html, that, 20);


  },

  toGuide: function (event) {
    wx.navigateTo({
      url: '/pages/guide/guide'
    })
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
  
  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {
    // return {
    //   title: '快来加入校园联谊吧！',
    //   path: '/pages/activity/activity',
    //   success: function(res) {
    //     // 分享成功
    //   },
    //   fail: function(res) {
    //     // 分享失败
    //   }
    // }
  // }
})