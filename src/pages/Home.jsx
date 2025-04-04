import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../components/common/Header';
import TabBar from '../components/common/TabBar';
import ServiceCard from '../components/common/ServiceCard';

const Home = () => {
  const petCareServices = [
    { 
      id: 1, 
      title: '上门喂猫', 
      image: require('../assets/images/cat_feeding.png') 
    },
    { 
      id: 2, 
      title: '上门遛狗', 
      image: require('../assets/images/dog_walking.png') 
    },
  ];
  
  const serviceStats = {
    count: 30677,
    date: '2025.03'
  };
  
  return (
    <View style={styles.container}>
      <Header title="宠物派" />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.banner}>
          <Image 
            source={require('../assets/images/pet_care_banner.png')} 
            style={styles.bannerImage} 
          />
        </View>
        
        <View style={styles.serviceContainer}>
          {petCareServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </View>
        
        <View style={styles.statsCard}>
          <Image 
            source={require('../assets/images/cat_icon.png')} 
            style={styles.statsIcon} 
          />
          <View style={styles.statsTextContainer}>
            <Text style={styles.statsLabel}>已累计服务宠物</Text>
            <Text style={styles.statsValue}>{serviceStats.count}</Text>
            <Text style={styles.statsDate}>截止{serviceStats.date}</Text>
          </View>
        </View>
        
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Image 
              source={require('../assets/images/wechat_icon.png')} 
              style={styles.featureIcon} 
            />
            <Text style={styles.featureText}>关注公众号</Text>
            <Text style={styles.featureSubText}>最新活动</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Image 
              source={require('../assets/images/wallet_icon.png')} 
              style={styles.featureIcon} 
            />
            <Text style={styles.featureText}>储值优惠</Text>
            <Text style={styles.featureSubText}>最高赠¥500</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Image 
              source={require('../assets/images/pet_icon.png')} 
              style={styles.featureIcon} 
            />
            <Text style={styles.featureText}>宠物领养</Text>
            <Text style={styles.featureSubText}>代善购买</Text>
          </View>
        </View>
      </ScrollView>
      
      <TabBar />
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
  banner: {
    width: '100%',
    height: 200,
    backgroundColor: '#FFEB3B',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -40,
    zIndex: 1,
  },
  statsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsIcon: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  statsTextContainer: {
    flex: 1,
  },
  statsLabel: {
    fontSize: 14,
    color: '#666',
  },
  statsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginVertical: 5,
  },
  statsDate: {
    fontSize: 12,
    color: '#999',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
  },
  featureItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    width: '30%',
  },
  featureIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  featureSubText: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

export default Home; 