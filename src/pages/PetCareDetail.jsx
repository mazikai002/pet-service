import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/common/Header';
import ServiceFlow from '../components/PetCare/ServiceFlow';
import PetDiary from '../components/PetCare/PetDiary';
import ServiceReviews from '../components/PetCare/ServiceReviews';
import BookingButton from '../components/PetCare/BookingButton';

const PetCareDetail = () => {
  const route = useRoute();
  const { serviceId } = route.params;
  const [activeTab, setActiveTab] = useState('intro');
  
  // 模拟服务数据
  const serviceData = serviceId === 1 
    ? {
        id: 1,
        title: '上门喂猫',
        price: 70,
        image: require('../assets/images/cat_feeding_banner.png'),
        features: ['服务全程录像', '一对一专属服务群', '不满意可退款'],
      }
    : {
        id: 2,
        title: '上门遛狗',
        price: 80,
        image: require('../assets/images/dog_walking_banner.png'),
        features: ['服务全程录像', '一对一专属服务群', '不满意可退款'],
      };
  
  return (
    <View style={styles.container}>
      <Header title={serviceData.title} showBack={true} />
      
      <ScrollView style={styles.scrollView}>
        <Image source={serviceData.image} style={styles.bannerImage} />
        
        <View style={styles.priceContainer}>
          <Text style={styles.serviceTitle}>{serviceData.title}服务</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>¥</Text>
            <Text style={styles.price}>{serviceData.price}</Text>
            <Text style={styles.priceUnit}>/次起</Text>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareText}>分享</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.featuresRow}>
            {serviceData.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Image 
                  source={require('../assets/images/check_icon.png')} 
                  style={styles.checkIcon} 
                />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.bonusContainer}>
            <Text style={styles.bonusText}>优惠</Text>
            <Text style={styles.bonusValue}>储值最高赠¥500</Text>
            <TouchableOpacity style={styles.bonusButton}>
              <Text style={styles.bonusButtonText}>去储值</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tabItem, activeTab === 'intro' && styles.activeTab]} 
            onPress={() => setActiveTab('intro')}
          >
            <Text style={[styles.tabText, activeTab === 'intro' && styles.activeTabText]}>服务介绍</Text>
            {activeTab === 'intro' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tabItem, activeTab === 'diary' && styles.activeTab]} 
            onPress={() => setActiveTab('diary')}
          >
            <Text style={[styles.tabText, activeTab === 'diary' && styles.activeTabText]}>伴宠日记</Text>
            {activeTab === 'diary' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tabItem, activeTab === 'reviews' && styles.activeTab]} 
            onPress={() => setActiveTab('reviews')}
          >
            <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>服务评价</Text>
            {activeTab === 'reviews' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        </View>
        
        {activeTab === 'intro' && (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>服务流程</Text>
            <ServiceFlow />
          </View>
        )}
        
        {activeTab === 'diary' && (
          <View style={styles.contentContainer}>
            <PetDiary serviceId={serviceId} />
          </View>
        )}
        
        {activeTab === 'reviews' && (
          <View style={styles.contentContainer}>
            <ServiceReviews serviceId={serviceId} />
          </View>
        )}
      </ScrollView>
      
      <BookingButton serviceId={serviceId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  priceContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    margin: 15,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginHorizontal: 10,
  },
  priceUnit: {
    fontSize: 14,
    color: '#666',
  },
  featuresRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
  },
  bonusContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bonusText: {
    fontSize: 14,
    color: '#666',
  },
  bonusValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginHorizontal: 10,
  },
  bonusButton: {
    backgroundColor: '#FF6B6B',
    padding: 10,
    borderRadius: 10,
  },
  bonusButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tabItem: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B6B',
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  tabIndicator: {
    height: 2,
    backgroundColor: '#FF6B6B',
    width: '100%',
    marginTop: 5,
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PetCareDetail; 