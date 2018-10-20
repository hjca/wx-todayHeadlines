// components/listItem/listItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leftTitle:{
      type: String
    },
    rightPrice:{
      type: String
    },
    bottomLine:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 页面跳转
    _pageJump(){
      this.triggerEvent("pageJump")
      // let that = this;
      // wx.navigateTo({
      //   url: '../' + that.data.pageUrl
      // })
    }
  }
})
