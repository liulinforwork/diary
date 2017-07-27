
const portUrl = "http://test.appserver.com";

function ajax(method,url,para,successFun,errFun) {
    wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: para,
        method:method,
        header: {
            'content-type': 'application/json'
        },
        success: successFun,
        fail:errFun
    })
}

module.exports = {
    ajax:ajax,
    portUrl:portUrl
}