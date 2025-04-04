import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ServiceFlow = () => {
  const steps = [
    {
      icon: require('../../assets/images/calendar_icon.png'),
      text: '预订后平台5分钟-2小时内分配伴宠专员',
    },
    {
      icon: require('../../assets/images/chat_icon.png'),
      text: '客服建立服务群，沟通服务需求/细节',
    },
    // 可以根据需要添加更多步骤
  ];
  
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepItem}>
          <Image source={step.icon} style={styles.stepIcon} />
          <Text style={styles.stepText}>{step.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFBEA',
    borderRadius: 8,
    padding: 15,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  stepText: {
    fontSize: 14,
    color: '#8B6E3C',
    flex: 1,
  },
});

export default ServiceFlow; 