//index.js
//获取应用实例
const app = getApp()
var start_time;
var end_time;
Page({
  data: {
    result:" ready go",
  },
  //事件处理函数

  push_start:function(event){
    start_time = new Date().getTime();
  },
  push_end:function(event)
  {
    end_time = new Date().getTime();
    var diff_time_in_second = (end_time-start_time)/1000;
    var diff_time = Math.abs(diff_time_in_second-1);
    var diff_ratio = new Number(diff_time*100).toFixed(2);
    var wording;
    if(0<=diff_time && 0.05>diff_time)
    {
      wording = "天才";
    }
    else if(0.05<=diff_time && 0.1>diff_time)
    {
      wording = "接近天才";
    }
    else if (0.1 <= diff_time && 0.3 > diff_time)
    {
      wording = "人才";
    }
    else if (0.3 <= diff_time && 0.5 > diff_time)
    {
      wording = "算是个人才";
    }
    else if (0.5 <= diff_time && 1 > diff_time) {
      wording = "蠢才";
    }
    else
    {
      wording = "猪";
    }

    var diff_time_second = parseFloat(diff_time_in_second);
    var wording_html = '你'+diff_time_second+"s 误差"+diff_ratio+"%\n"+wording;
    this.setData(
      {result:wording_html}
    );
  },
  bindRoute:function(){
    wx.navigateTo({
      url: '../route/route?id=1',
    })
  }
})