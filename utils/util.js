let API_HOST = "https://result.eolinker.com/wTZWVGv469f70308f182c3cc9aa1e286b3e98783942a618?uri=";
let DEBUG = true;//切换数据入口

// 使用eoLinker获取首页菜系数据
function eoLinkerAjax(url, successFun, data, method = "GET", leary = '1', header = {}) {
  // 是否显示Loadding
  if (leary == 1) {
    wx.showLoading({
      title: "请稍后...",
      mask: true
    })
  }
  wx.request({
    url: API_HOST + url,
    method: method,
    data: data,
    header: header ? header : { "Content-Type": "application/json" },
    success: function (res) {
      successFun(res);
    },
    fail: function () {
      wx.hideLoading()
    }
  });
}

module.exports = {
  eoLinkerAjax: eoLinkerAjax
}