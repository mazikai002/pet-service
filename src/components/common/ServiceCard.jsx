import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ServiceCard = ({ service }) => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate('PetCareDetail', { serviceId: service.id });
  };
  
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={service.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{service.title}</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>预订</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tagContainer: {
    backgroundColor: '#FFC0CB',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  tagText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ServiceCard; 