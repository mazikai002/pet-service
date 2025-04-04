// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    petCareServices: [
      { id: 1, title: '上门喂猫', price: '70元/次' },
      { id: 2, title: '上门遛狗', price: '80元/次' }
    ],
    serviceStats: "已累计服务30,677只宠物",
    features: [
      {
        iconType: 'note',
        title: '关注公众号',
        subTitle: '最新活动'
      },
      {
        iconType: 'card',
        title: '储值优惠',
        subTitle: '最高赠¥500'
      },
      {
        iconType: 'appreciate',
        title: '宠物领养',
        subTitle: '代善购买'
      }
    ],
    title: "宠物派",
    subtitle: "专业的宠物照顾服务",
    services: [
      { id: 1, title: '上门喂猫', price: '70元/次' },
      { id: 2, title: '上门遛狗', price: '80元/次' }
    ]
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  navigateToDetail(e) {
    const serviceId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/petCareDetail/petCareDetail?id=${serviceId}`
    });
  },
  followOfficialAccount() {
    wx.navigateTo({
      url: '/pages/follow/follow'
    });
  },
  goToWallet() {
    wx.navigateTo({
      url: '/pages/wallet/wallet'
    });
  },
  goToPetAdoption() {
    wx.navigateTo({
      url: '/pages/adoption/adoption'
    });
  },
  bookService() {
    wx.showActionSheet({
      itemList: ['上门喂猫', '上门遛狗'],
      success: (res) => {
        const serviceId = res.tapIndex + 1;
        this.navigateToDetail({
          currentTarget: {
            dataset: {
              id: serviceId
            }
          }
        });
      }
    });
  },
  // 页面加载
  onLoad() {
    console.log('首页加载成功');
  }
})
