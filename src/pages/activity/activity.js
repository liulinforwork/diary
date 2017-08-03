const comm = require("./../../utils/common");
var WxParse = require('./../../wxParse/wxParse.js');

Page({

  // 初始数据
  data: {
    info:''
  },

  // 监听页面加载
  onLoad: function (options) {
    
    var that = this;
    comm.ajax("POST","/wechat/applet/getActivityDetail",{
      activityId:options.activityId
    },function (res) {

      switch (res.data.code){
        case 200:

          that.setData({
            info:res.data.data
          });
          WxParse.wxParse('article', 'html', res.data.data.detail, that, 20);
          break;
        case 400:
          break;
        default:
          break;
      }
    },function(err){
      console.log(err);
    });
  },

  toGuide: function (event) {
    wx.navigateTo({
      url: '/pages/guide/guide'
    })
  }

})