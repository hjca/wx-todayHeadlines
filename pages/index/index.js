var API = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuListData:'',
    scrollX:true,
    flag:0,
    contentList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let that = this;
    // 获取首页菜系种类数据
    API.eoLinkerAjax('/index/tableMenu', function (result) {
      wx.hideLoading();
      that.setData({
        menuListData:result.data.data.list
      });
    },null,null,2)

    // 获取首页内容
    API.eoLinkerAjax('/index/content', function (result) {
      wx.hideLoading();
      that.setData({
        contentList:result.data.data.list
      })
    }, { "menuId": that.data.flag}, null, 2)
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
    
  },

  // 开始搜索
  startSearch(item){
    console.log(item);
  },

  // 选择相对应的菜单
  selectMenu(evt){
    let index = evt.currentTarget.dataset.menindex;
    this.setData({
      flag:index
    })
  },
  changeTable(event){
    this.setData({
      flag:event.detail.current
    })
  },
  seeDetail() {
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})