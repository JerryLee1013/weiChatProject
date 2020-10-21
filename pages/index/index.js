// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '宝宝',
    userInfo: {},
    isShow: true
  },

  handleClick () {
    //  点击跳转到list页面
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  handleGetUserInfo (e) {
    console.log(e)
    //  判断用户是否点击允许获取权限
    if (e.detail.rawData) {
      this.getUserInfo()
    }
  },
  getUserInfo () {
    //  判断用户是否授权
    wx.getSetting({
      success :(data) => {
        // console.log(data)
        if (data.authSetting['scope.userInfo']) {
          //  用户已经授权
          this.setData({
            isShow:false
          })
        } else {
          //  用户没有授权
        }
      }
    })
    //  获取用户登录的信息
    wx.getUserInfo({
      withCredentials: false,
      success: (data) => {
        // console.log('成功的回调', data)
        //  更新data中的userInfo
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail: (res) => {
        console.log('授权失败回调',res)
      },
      complete: (res) => {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  做一些初始化工作，发送请求，开启定时器
    console.log('onload' + this.data.msg)
    // console.log(this)
    this.getUserInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onready' + this.data.msg)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow' + this.data.msg)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide' + this.data.msg)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload' + this.data.msg)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh' + this.data.msg)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom' + this.data.msg)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})