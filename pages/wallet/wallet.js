Page({
  data: {
    walletBalance: 0,
    bonusOptions: [
      { amount: 100, bonus: 10 },
      { amount: 200, bonus: 30 },
      { amount: 500, bonus: 80 },
      { amount: 1000, bonus: 200 }
    ],
    selectedOption: null
  },
  
  selectOption(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      selectedOption: index
    });
  },
  
  topUp() {
    if (this.data.selectedOption === null) {
      wx.showToast({
        title: '请选择充值金额',
        icon: 'none'
      });
      return;
    }
    
    const option = this.data.bonusOptions[this.data.selectedOption];
    wx.showModal({
      title: '确认充值',
      content: `您将充值${option.amount}元，额外赠送${option.bonus}元`,
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '充值成功',
            icon: 'success',
            duration: 2000,
            success: () => {
              setTimeout(() => {
                wx.navigateBack();
              }, 2000);
            }
          });
        }
      }
    });
  }
}) 