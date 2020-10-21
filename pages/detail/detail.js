// pages/detail/detail.js
let datas = require('../../datas/list-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    index: null,
    isCollection: false,
    isShare:false
  },

  toggleCollection () {
   let isCollection = !this.data.isCollection
   this.setData({
    isCollection
   })

   let title = isCollection ? '收藏成功' : '取消收藏'
   wx.showToast({
     title,
     icon: 'success'
   })
    
   wx.getStorage({
     key: 'isCollection',
     success: (datas) => {
        // console.log(datas, typeof datas)
        let obj = datas.data
        let {index} = this.data
        obj[index] = isCollection
        //  缓存数据到本地
        wx.setStorage({
          key: 'isCollection',
          data: obj,
          success: () => {
            console.log('缓存成功')
          }
        })
     }
   })
  },

  toggleShare () {
    let isShare = !this.data.isShare
    this.setData({
     isShare
    })
    let title = isShare ? '已分享' : '未分享'
    wx.showToast({
      title,
      icon: 'success'
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    // 获取参数值
    let index = options.index
    // 更新detailOBj的状态
    this.setData({
      detailObj: datas.list_data[index],
      index
    })
    // 根据本地缓存的数据判断用户是否收藏当前文章
    let detailStorage = wx.getStorageSync('isCollection')
    console.log(detailStorage)
    if (!detailStorage) {
      //  在缓存中初始化空对象
      wx.setStorageSync('isCollection', {})
    }
    //  判断用户是否收藏
    if (detailStorage[index]) {
      this.setData({
        isCollection: detailStorage[index]
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})