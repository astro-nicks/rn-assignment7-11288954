// screens/ProductDetailScreen.jsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  const addToCart = async (product) => {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <View>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

export default ProductDetailScreen;
