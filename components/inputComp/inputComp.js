// components/inputComp/inputComp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    searchVal:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _searchSart(e){
      this.triggerEvent("startSearch", e.detail.value)
    }
  }
})
