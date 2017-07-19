//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    arrObj: [{
      title:'第一天',
      info:"今天星期一，上街买大衣，大衣的价钱是一块一毛一。"
    },{
      title: '第二天',
      info: "今天星期二，上街买手绢，手绢的价钱是二块二毛二。"
    },{
      title: '第三天',
      info: "今天星期三上街买人参，人参的价钱是三块三毛三。"
    }, {
      title: '第四天',
      info: "今天星期四，上街买柿子，柿子的价格是四块四毛四。"
    }, {
      title: '第五天',
      info: "今天星期五，上街买老虎，老虎的价钱是五块五毛五。"
    }, {
      title: '第六天',
      info: "今天星期六，上街买石榴，石榴的价格是六块六毛六。"
    }, {
      title: '第七天',
      info: "今天星期六，上街买石榴，石榴的价格是六块六毛六。"
    }, {
      title: '第八天',
      info: "今天星期六，上街买石榴，石榴的价格是六块六毛六。"
    }, {
      title: '第九天',
      info: "今天星期六，上街买石榴，石榴的价格是六块六毛六。"
    }, {
      title: '第十天',
      info: "今天星期六，上街买石榴，石榴的价格是六块六毛六。"
    }]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },

  onShareAppMessage:function(){
    return{
      title:"这一天天的过的",
      path:"/pages/share/read",
      success:function(res){
        console.log(res);
      },
      error: function(err){
        console.log(err);
      }
    }
  }

})
