// screens/HomeScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="View Details" onPress={() => navigation.navigate('ProductDetail', { product: item })} />
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
