Page({
  data: {
    activeTab: 'all', // all, ongoing, completed, cancelled
    orders: []
  },
  
  onLoad: function() {
    // 初始化空订单状态
  },
  
  // 切换订单标签页
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },
  
  // 创建新订单
  createNewOrder() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
}) 