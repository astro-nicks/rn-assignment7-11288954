import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Product  ({ product }) {
  const addToCart = async () => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const cart = existingCart ? JSON.parse(existingCart) : [];
      cart.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  };

  return (
    <View style={styles.productContainer}>
      <View>
        <Image source={product.image} style={styles.image} />
        <TouchableOpacity onPress={() => addToCart()}>
          <Image style={styles.ado} source={require('../assets/add_circle.png')}  />
        </TouchableOpacity>
      </View>
      <Text style={styles.kol}>{product.text}</Text>
      <View style={styles.add}>
        <Text style={styles.desc}>
            reversible angora cardigan
        </Text>
        <Text style={styles.amt}>
          $120
        </Text>
      </View>
      
    </View>
  );
};



const styles = StyleSheet.create({
  productContainer: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 25,
  },
  kol:{
    alignSelf: 'flex-start',
    fontWeight: 'black',
    fontSize: 15,
  },
  image: {
    marginBottom: 5,
    width: 155,
    height: 215,
    flex: 1,
  },
  ado:{
    alignSelf: 'flex-end',
    marginTop: -34,
    marginRight: 6,
  },
  desc:{
    fontSize: 11,
  },
  amt:{
    fontSize: 17,
    color: '#8D8A85',
    marginTop: 5,
  },
  add:{
    marginTop: -4,
  }
});
