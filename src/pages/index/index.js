//index.js

//获取应用实例
// var app = getApp();
var comm = require("./../../utils/common");

Page({
  data: {
    isShow:true,
    list1:[
      {
        name:'速度与激情第一步速度与激情第一步',
        age:24,
          imgUrl:'./../../images/1.jpg',
          school:'四川大学',
          gender:0,
        id:1
      },
      {
        name: '速度与激情第二步',
            age: 24,
          imgUrl: './../../images/1.jpg',
          school: '四川大学',
          gender: 1,
        id:2
      },
      {
        name: '速度与激情第二步',
            age: 24,
          imgUrl: './../../images/1.jpg',
          school: '四川大学',
          gender: 0,
        id:3
      },
      {
        name: '速度与激情第二步',
        age: 24,
        imgUrl: './../../images/1.jpg',
        school: '四川大学',
        gender: 1,
        id:4
      }],
    // list1:[],
    list2:[
      {
        name: '1',
        age: 24,
        imgUrl: './../../images/1.jpg',
        school: '四川大学',
        gender: 1,
        id:5
      },
      {
        name: '2',
        age: 24,
        imgUrl: './../../images/1.jpg',
        school: '四川大学',
        gender: 1,
        id:6
      },
      {
        name: '3',
        age: 24,
        imgUrl: './../../images/1.jpg',
        school: '四川大学',
        gender: 1,
        id:7
      },
      {
        name: '4',
        age: 24,
        imgUrl: './../../images/1.jpg',
        school: '四川大学',
        gender: 1,
        id:8
      }
    ],
    list:[],
    page: 1,
    size: 20,
    isEmpty:false,
    hasMore:true,
    isFreshing:false
  },
  onLoad: function () {
    var that = this;

    comm.ajax("get","http://test.appserver.com/activity/getSingEndTime?userId=7154&timestamp=1500890882472&sign=ec70c750484fbc00656b6dde3844b025&para=%7B%22userId%22%3A%227154%22%2C%22coordinate%22%3A%5B30.588552%2C104.05451%5D%7D&version=1.6.1&terminal=1&pim=a53a1695a8920b38383d07df393bced4&h5=0",{
      text:1
    },function (res) {
      switch (res.data.code){
        case 200:

          that.setData({
            list:that.data.list1,
          });
          // that.setData({
          //   list:that.data.list1,
          //   isEmpty:true
          // });

              break;
        case 400:
              break;
        default:
              break;
      }

    },function(err){
      // console.log(err);
    });
  },

  // 加载更多
  loadMore:function (e) {

    var that = this;
    if (!this.data.hasMore) return;

    if(that.data.isFreshing){
      return;
    }else{
      comm.ajax("get","http://test.appserver.com/activity/getSingEndTime?userId=7154&timestamp=1500890882472&sign=ec70c750484fbc00656b6dde3844b025&para=%7B%22userId%22%3A%227154%22%2C%22coordinate%22%3A%5B30.588552%2C104.05451%5D%7D&version=1.6.1&terminal=1&pim=a53a1695a8920b38383d07df393bced4&h5=0",{
        text:1
      },function (res) {
        setTimeout(function () {
          that.setData({
            list: that.data.list.concat(that.data.list2),
          });
          setTimeout(function () {
            that.setData({
              isFreshing:false
            });
          },0)
        },10)
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
  toDetail: function (event) {
    var p = event.currentTarget.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+p
    })
  },
  toActivity: function (event) {
    wx.navigateTo({
      url: '/pages/activity/activity'
    })
  },

});