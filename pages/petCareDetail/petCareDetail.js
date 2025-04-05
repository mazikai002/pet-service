Page({
  data: {
    serviceInfo: {},
    activeTab: 'intro', // 'intro', 'diary', 'reviews'
    id: null,
    title: ''
  },
  
  onLoad: function(options) {
    console.log('服务详情页接收参数:', options);
    
    // 获取页面参数
    const id = Number(options.id) || 1;
    const title = options.title || (id === 1 ? '上门喂猫' : '上门遛狗');
    
    this.setData({
      id,
      title
    });
    
    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: title + '服务'
    });
    
    const serviceInfo = this.getServiceInfo(id);
    
    this.setData({
      serviceInfo
    });
  },
  
  getServiceInfo(serviceId) {
    const services = {
      1: {
        id: 1,
        title: '上门喂猫',
        price: 70,
        features: ['服务全程录像', '一对一专属服务群', '不满意可退款'],
        description: '为您的猫咪提供专业的上门喂食服务，包括食物准备、喂食、铲屎、简单游戏互动等。'
      },
      2: {
        id: 2,
        title: '上门遛狗',
        price: 80,
        features: ['服务全程录像', '一对一专属服务群', '不满意可退款'],
        description: '为您的狗狗提供专业的上门遛狗服务，包括遛狗、游戏互动、基础管理等。'
      }
    };
    
    return services[serviceId] || {};
  },
  
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },
  
  // 预订服务
  bookNow() {
    wx.showModal({
      title: '确认预订',
      content: `您确定要预订${this.data.title}服务吗？`,
      success: (res) => {
        if (res.confirm) {
          // 显示预订成功提示
          wx.showToast({
            title: '预订成功',
            icon: 'success',
            duration: 2000
          });
          
          // 2秒后返回首页
          setTimeout(() => {
            wx.navigateBack();
          }, 2000);
        }
      }
    });
  },
  
  // 联系客服
  contactCustomerService() {
    wx.showToast({
      title: '正在连接客服...',
      icon: 'loading',
      duration: 1500
    });
  },
  
  // 分享服务
  shareService() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },
  
  // 去储值
  goToWallet() {
    wx.showToast({
      title: '储值功能开发中',
      icon: 'none'
    });
  }
}) 