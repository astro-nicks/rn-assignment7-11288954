import React from "react";
import { StyleSheet,View, Text,Image, ScrollView, TouchableOpacity, Button } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function CartScreen({navigation}){
    const [cart, setCart] = useState([]);

    useEffect(() => {
      const fetchCart = async () => {
        try {
          const existingCart = await AsyncStorage.getItem('cart');
          const cartItems = existingCart ? JSON.parse(existingCart) : [];
          setCart(cartItems);
        } catch (error) {
          console.error('Error fetching cart', error);
        }
      };
  
      fetchCart();
    }, []);
  
    const removeFromCart = async (index) => {
      try {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        await AsyncStorage.setItem('cart', JSON.stringify(newCart));
      } catch (error) {
        console.error('Error removing from cart', error);
      }
    };

    return(
            <ScrollView style={styles.kolop}>
            <View style={styles.kolop}>
            
                <View style={styles.headerfx}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Image style={styles.ogo} source={require('../assets/Logo.png')}/>
                  </TouchableOpacity>
                  <Image style={styles.srch4} source={require('../assets/Search.png')}/>
                </View>
                <View>
                <Image style={styles.fogo} source={require('../assets/chk.png')}/>
                </View>
                <View>
                {cart.map((product, index) => (
                  <View key={index} style={styles.productContainer}>
                      <View>
                  <Image source={product.image} style={styles.image} />
                </View>
                <View style={styles.tst}>
                  <View style={styles.tst1}>
                  <Text style={styles.kol}>{product.text}</Text>
                <View style={styles.add}>
                  <Text style={styles.desc}>
                      reversible angora cardigan
                  </Text>
                  <Text style={styles.amt}>
                    $120
                  </Text>
                  </View>
                
                  <TouchableOpacity style={styles.ado} onPress={() => removeFromCart(index)}>
                    <Image style={styles.popp}  source={require('../assets/remove.png')}  />
                  </TouchableOpacity>
                </View>
                </View>
                
                  </View>
                  
                ))}
                </View>
                <View style={styles.botx}>
                  <Image style={styles.botx1} source={require('../assets/tt.png')} />
                </View>
            </View>
            
            </ScrollView>
    )
}

const styles = StyleSheet.create({
  productContainer: {
    marginLeft: 6,
    marginBottom: 25,
    flexDirection: 'row',

  },
  tst:{
      alignSelf: 'center',
      marginLeft: 5,
  },
  tst1:{
    marginTop: 20,
  },
  kol:{
    alignSelf: 'flex-start',
    fontWeight: 'black',
    fontSize: 23,
    marginBottom: 8,
  },
  image: {
    marginBottom: 10,
    width: 120,
    height: 180,
    flex: 1,
  },
  botx:{
    justifyContent: 'center',
    flex: 1,
  },
  botx1:{
    position: 'relative',
    width: 370,
    height: 90,
    alignSelf: 'center',
    marginTop: 220,
    
  },
  headerfx:{
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  fogo:{
   
   alignSelf: 'center',
   marginLeft: 4,
  },
  kolop:{
      marginTop: 27,
      backgroundColor: '#ffffff',
      marginLeft: 3,
      flex: 1,
  },
  ado:{
    alignSelf: 'flex-end',
    marginTop: 12,
    marginRight: -10,
  },
  popp:{
      width: 23,
      height: 23,
  },
  ogo:{
      alignSelf: 'center',
      marginLeft: 132,
  },
  srch4:{
      alignSelf: 'flex-end',
      marginRight: 15,
      
  },
  desc:{
      fontSize: 15,
  },
  amt:{
    fontSize: 20,
    color: '#8D8A85',
    marginTop: 5,
    marginBottom: 17,
  },
  add:{
    marginTop: -4,
  }
  });