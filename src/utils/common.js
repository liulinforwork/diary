
// 本机地址
// const portUrl = "http://192.168.1.169";
// 测试环境
const portUrl = "http://test.appserver.com";
// 预发布环境
// const portUrl = "http://test.appserver.com";
// 正式环境
// const portUrl = "http://test.appserver.com";


function ajax(method,url,para,successFun,errFun) {
    wx.request({
        url: portUrl + url, //仅为示例，并非真实的接口地址
        data: para,
        method:method,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: successFun,
        fail:errFun
    })
}


// 根据出生日期时间戳算出年龄
function jsGetAge(strCurrentDate,strBirthday){
    var returnAge;

    strBirthday = new Date(strBirthday);
    var birthYear = strBirthday.getFullYear();
    var birthMonth = strBirthday.getMonth()+1;
    var birthDay = strBirthday.getDate();
    // console.log(birthYear+"年"+birthMonth+"月"+birthDay+"日");

    var d = new Date(strCurrentDate);
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();
    // console.log(nowYear+"年"+nowMonth+"月"+nowDay+"日");

    if(nowYear == birthYear){
        returnAge = 0;//同年 则为0岁
    }
    else{
        var ageDiff = nowYear - birthYear ; //年之差
        if(ageDiff > 0){
            if(nowMonth == birthMonth) {
                // var dayDiff = nowDay - birthDay;//日之差
                // if(dayDiff < 0)
                // {
                //     returnAge = ageDiff - 1;
                // }
                // else
                // {
                returnAge = ageDiff ;
                // }
            }
            else
            {
                var monthDiff = nowMonth - birthMonth;//月之差
                if(monthDiff < 0)
                {
                    returnAge = ageDiff - 1;
                }
                else
                {
                    returnAge = ageDiff ;
                }
            }
        }
        else
        {
            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
        }
    }
    return returnAge;//返回周岁年龄

}

// function formatTime(date) {
//     var year = date.getFullYear()
//     var month = date.getMonth() + 1
//     var day = date.getDate()
//
//     var hour = date.getHours()
//     var minute = date.getMinutes()
//     var second = date.getSeconds()
//
//     return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// 计算最后时间
function calcTime(lastTime,that) {
    var sysTime = new Date().getTime();
    var day;
    var diffDay = Math.abs((sysTime - lastTime))/(1000*60*60*24);
    var diffHour = Math.round(Math.abs((sysTime - lastTime))/(1000*60*60));
    var diffMinute =  Math.round(Math.abs((sysTime - lastTime))/(1000*60));

    if(diffDay<1){
        if(diffHour<1){
            if(diffMinute<1){
                day = "1分钟前活跃";
            }
            else if(diffMinute>59){
                day = "1小时前活跃";
            }
            else{
                day = diffMinute+ "分钟前活跃";
            }
        }else{
            day =diffHour+ "小时前活跃";
        }
    }
    else{
        if(diffDay<3){
            day = "1天前活跃";
        }
        else if(3<=diffDay && diffDay<7){
            day = "3天前活跃";
        }
        else{
            //不显示最后时间
            that.setData({
                isShowTime:false
            })
        }
    }
    return day;
}

// 截取字符串最后一位字符
function cutWord(word) {
    return word.substring(0,word.length-1);
}

// 重新组合标签数组
// function getTags(tags) {
//     var arr=[],arr1=[],arr2=[],arr3=[],arr4=[];
//
//     if(tags){
//         for(let i=0; i<tags.length; i++){
//
//             tags[i] = JSON.parse(tags[i]);
//
//             switch (tags[i].tagType){
//                 case 1:
//                     arr1.push(tags[i].tagName);
//                     break;
//                 case 2:
//                     arr2.push(tags[i].tagName);
//                     break;
//                 case 3:
//                     arr3.push(tags[i].tagName);
//                     break;
//                 case 4:
//                     arr4.push(tags[i].tagName);
//                     break;
//             }
//         }
//         arr.push(arr1,arr2,arr3,arr4);
//         // arr.push(arr1);
//     }else{
//
//     }
//     console.log(arr)
//     return arr;
// }

module.exports = {
    ajax:ajax,
    jsGetAge:jsGetAge,
    // formatTime:formatTime,
    calcTime:calcTime,
    cutWord:cutWord,
    // getTags:getTags,
    portUrl:portUrl
}