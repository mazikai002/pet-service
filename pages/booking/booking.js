Page({
  data: {
    serviceId: null,
    serviceTitle: '',
    date: '',
    time: '',
    address: '',
    notes: '',
    pets: []
  },
  
  onLoad(options) {
    const serviceId = Number(options.id);
    const serviceTitle = options.title || '';
    
    // 模拟获取用户宠物列表
    const pets = [
      { id: 1, name: '奇奇', type: '猫咪', selected: false },
      { id: 2, name: '球球', type: '狗狗', selected: false }
    ];
    
    this.setData({
      serviceId,
      serviceTitle,
      pets,
      date: this.getTomorrowDate()
    });
  },
  
  // 获取明天的日期作为默认日期
  getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  
  // 选择日期
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
  },
  
  // 选择时间
  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    });
  },
  
  // 选择宠物
  togglePetSelection(e) {
    const index = e.currentTarget.dataset.index;
    const pets = this.data.pets;
    pets[index].selected = !pets[index].selected;
    
    this.setData({ pets });
  },
  
  // 输入地址
  inputAddress(e) {
    this.setData({
      address: e.detail.value
    });
  },
  
  // 输入备注
  inputNotes(e) {
    this.setData({
      notes: e.detail.value
    });
  },
  
  // 提交订单
  submitOrder() {
    // 验证信息
    if (!this.data.date || !this.data.time) {
      wx.showToast({
        title: '请选择服务日期和时间',
        icon: 'none'
      });
      return;
    }
    
    if (!this.data.address) {
      wx.showToast({
        title: '请填写服务地址',
        icon: 'none'
      });
      return;
    }
    
    const selectedPets = this.data.pets.filter(pet => pet.selected);
    if (selectedPets.length === 0) {
      wx.showToast({
        title: '请至少选择一个宠物',
        icon: 'none'
      });
      return;
    }
    
    // 提交订单
    wx.showLoading({
      title: '提交中...',
    });
    
    // 模拟网络请求
    setTimeout(() => {
      wx.hideLoading();
      wx.showModal({
        title: '预订成功',
        content: '您的订单已提交，服务人员将尽快与您联系',
        showCancel: false,
        success: () => {
          wx.switchTab({
            url: '/pages/myOrders/myOrders'
          });
        }
      });
    }, 1500);
  }
}) 