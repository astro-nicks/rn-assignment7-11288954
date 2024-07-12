import React from "react";
import { StyleSheet,View, Text,Image, ScrollView, TouchableOpacity } from "react-native";
import Product from "../Components/Product";

export default function HomeScreen({navigation}){

    const data = [
        { id: '1', image: require('../assets/dress1.png'), text: 'Office Wear' },
        { id: '2', image: require('../assets/dress2.png'), text: 'Black' },
        { id: '3', image: require('../assets/dress3.png'), text: 'Church Wear' },
        { id: '4', image: require('../assets/dress4.png'), text: 'Lamerei' },
        { id: '5', image: require('../assets/dress5.png'), text: '21WN' },
        { id: '6', image: require('../assets/dress6.png'), text: 'Lopo' },
        { id: '7', image: require('../assets/dress7.png'), text: '21WN' },
        { id: '8', image: require('../assets/dress3.png'), text: 'lame' },
      ];
    return(
        <ScrollView  showsVerticalScrollIndicator={false} style={styles.cont}>
            <View style={styles.header}>
                <View style={styles.header1} >
                    <Image source={require('../assets/Menu.png')}/>
                </View>
                <View style={styles.header2}>
                  <Image source={require('../assets/Logo.png')}/>
                </View>
                <View style={styles.header3}>
                    <Image style={styles.srch} source={require('../assets/Search.png')}/>
                    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                        <Image source={require('../assets/shoppingBag.png')}/>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={styles.sub}>
                    <Text style={styles.jik}>
                        O U R  S T O R Y
                    </Text>
                    <View style={styles.bbtd}> 
                        <Image style={styles.lj} source={require('../assets/ui.png')}/>
                        <Image style={styles.lj} source={require('../assets/iu.png')}/>
                    </View>
            </View>
            
            <View style={styles.cards}>
            {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cont: {
        marginTop: 23,
        marginLeft: 7,
        marginRight: 7,
        backgroundColor: '#ffffff',

    },
    lj:{
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    jik:{
        fontSize: 22,
        fontWeight: 'black',
        marginLeft: 10,
        marginTop: -9,
    },
    sub:{
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    bbtd:{
        flexDirection: 'row',
        marginTop: -20,
        marginRight: 10,

    },
    srch:{
        marginRight: 10,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 7,
        padding: 7,
        marginBottom: -10,
    },
    header1:{
        marginRight: 50,
    },
    header2:{
        alignItems: 'center',
    },
    header3:{
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginBottom: 50,
        
    },
    cards:{
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
})