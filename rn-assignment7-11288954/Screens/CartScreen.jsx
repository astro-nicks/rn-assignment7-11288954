// screens/CartScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await AsyncStorage.getItem('cart');
      setCartItems(JSON.parse(items) || []);
    };
    fetchCartItems();
  }, []);

  const removeItem = async (item) => {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Remove" onPress={() => removeItem(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;
