//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array:[{
      title:'路飞',
      src: '../../images/1.jpeg'
    },
    {
      title: '娜美',
      src: '../../images/2.jpeg'
      }, 
      {
        title: '卡通',
        src: '../../images/3.jpeg'
      }, 
      {
        title: '卡通',
        src: '../../images/4.jpeg'
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
