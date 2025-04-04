Page({
  data: {
    pets: [
      {
        id: 1,
        name: '小花',
        type: '猫咪',
        breed: '中华田园猫',
        age: '2岁',
        description: '活泼好动，喜欢玩耍，已绝育。'
      },
      {
        id: 2,
        name: '豆豆',
        type: '狗狗',
        breed: '柴犬',
        age: '1岁半',
        description: '性格友善，喜欢与人互动，已接种疫苗。'
      },
      {
        id: 3,
        name: '奶糖',
        type: '猫咪',
        breed: '英短',
        age: '3岁',
        description: '温顺亲人，有良好的生活习惯，已绝育。'
      }
    ]
  },
  
  viewPetDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '宠物详情',
      content: '此功能正在开发中，敬请期待',
      showCancel: false
    });
  },
  
  applyAdoption() {
    wx.showModal({
      title: '申请领养',
      content: '确定要申请领养吗？我们会联系您进行家访。',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '申请已提交',
            icon: 'success'
          });
        }
      }
    });
  }
}) 