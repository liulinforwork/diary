console.log("这里是公共js");




function ajax(){
  wx.request({
    url: 'test.php', //仅为示例，并非真实的接口地址
    data: {
      x: '',
      y: ''
    },
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      var data = res.data;
    }
  });
}