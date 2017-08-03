import comm from "./../../utils/common";

Page({

  // 初始数据
  data: {
    swiperCurrent: 0,
    isShowTime:true,
    info:"",
    label:[
      // {
      //
      //   1:['死宅男','喜欢动画片','最爱美剧']
      // },
      // {
      //   tagType: 2,
      //   list: ['看电影', '吃饭', '睡瞌睡', '这幅画水粉或多或少', '睡瞌睡']
      // },
      // {
      //   tagType: 3,
      //   list: ['四川', '喜马拉雅山', '泰国', '吃饭', '斯蒂芬', '吃饭', '睡瞌睡']
      // },
      // {
      //   tagType:4,
      //   list: ['柬埔寨', '越南', '斯蒂芬','柬埔寨']
      // }
    ]
  },

  // swiper
  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  // 跳转到二维码页面
  toGuide: function (event) {
    wx.navigateTo({
      url: '/pages/guide/guide'
    })
  },

  // 首次加载
  onLoad: function (options) {

    var that = this;
    comm.ajax("POST","/wechat/applet/getUserDetail",{
      userId:options.id
    },function (res) {

      switch (res.data.code){
        case 200:

          res.data.data.seeInfo.photos = JSON.parse(res.data.data.seeInfo.photos);

          res.data.data.seeInfo.birthday = comm.jsGetAge(new Date().getTime(),res.data.data.seeInfo.birthday);
          res.data.data.seeInfo.provinceName = comm.cutWord( res.data.data.seeInfo.provinceName);
          res.data.data.seeInfo.cityName = comm.cutWord( res.data.data.seeInfo.cityName);

          res.data.data.seeInfo.latestActiveTime = comm.calcTime(res.data.data.seeInfo.latestActiveTime,that);

          that.setData({
            info:res.data.data.seeInfo
          });

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