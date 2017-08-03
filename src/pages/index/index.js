var comm = require("./../../utils/common");

Page({

  // 初始化数据
  data: {
    isShow:null,
    list:null,
    page: 1,
    banner:null,
    hasMore:true,
    isFreshing:false
  },

  // 初次加载
  onLoad: function () {

    var that = this;

    comm.ajax("POST","/wechat/applet/loadHome",{
      pageNo:that.data.page
    },function (res) {

      switch (res.data.code){
        case 200:

          (res.data.data.banner === undefined)?that.data.isShow=false:that.data.isShow=true;


          for(let i=0;i<res.data.data.users.length;i++){
            res.data.data.users[i].photos = JSON.parse(res.data.data.users[i].photos)
            res.data.data.users[i].birthDay = comm.jsGetAge(new Date().getTime(),res.data.data.users[i].birthDay)
          }

          // 如果初次加载数据小于20条 代表没有分页关闭加载器
          if(res.data.data.users.length<20){
            that.setData({
              hasMore:false
            });
          }

          that.setData({
            list:res.data.data.users,
            banner:res.data.data.banner,
          });

          that.data.page++;
              break;
        case 400:
              break;
        default:
            console.log("接口请求错误");
              break;
      }
    },function(err){
      console.log(err);
    });

  },

  // 加载更多
  loadMore:function (e) {

    var that = this;
    if (!this.data.hasMore) return;

    if(that.data.isFreshing){
      return;
    }else{
      comm.ajax("POST","/wechat/applet/loadHome",{
        pageNo:that.data.page
      },function (res) {

        if(res.data.data.users.length === 0){

          that.setData({
            hasMore:false
          });

        }else{

          for(let i=0; i<res.data.data.users.length; i++){
            res.data.data.users[i].photos = JSON.parse(res.data.data.users[i].photos);
            res.data.data.users[i].birthDay = comm.jsGetAge(new Date().getTime(),res.data.data.users[i].birthDay)
          }

          setTimeout(function () {
            that.setData({
              list: that.data.list.concat(res.data.data.users)
            });
            setTimeout(function () {
              that.setData({
                isFreshing:false
              });
            },0)
          },100);
          that.data.page++;
        }
      },function(err){
        console.log(err);
      });
      that.setData({
        isFreshing:true
      });
    }
  },

  //跳转页面
  toGuide: function (event) {
    wx.navigateTo({
      url: '/pages/guide/guide'
    })  
  },

  // 跳转详情页
  toDetail: function (event) {
    let p = event.currentTarget.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+p
    })
  },

  // 跳转活动介绍页
  toActivity: function (event) {

    let p = event.currentTarget.id;
    wx.navigateTo({
      url: '/pages/activity/activity?activityId='+p
    })
  },

  // 图片放大器
  previewImage: function (e) {
    var that = this;
    var imgUrl = e.target.dataset.src;
    var list = e.currentTarget.dataset.list;
 
    wx.previewImage({
      current: imgUrl, // 当前显示图片的http链接
      urls: list // 需要预览的图片http链接列表
    })

  },

});