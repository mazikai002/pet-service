import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookingButton = ({ serviceId, title }) => {
  const navigation = useNavigation();
  
  const handleBooking = () => {
    // 这里可以添加预订逻辑，例如调用API
    Alert.alert(
      '预订成功',
      '我们会在5分钟-2小时内安排专员与您联系',
      [
        { text: '确定', onPress: () => navigation.navigate('MyOrders') }
      ]
    );
  };
  
  return (
    <TouchableOpacity style={styles.button} onPress={handleBooking}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#FFCC00',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingButton; 