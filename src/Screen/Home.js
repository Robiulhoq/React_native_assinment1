import { View, StyleSheet, Image, Button } from 'react-native';
import React from 'react';
import { color } from '../Theme/Color';
import { speching } from '../Theme/Speching';
import Text from '../Componets/Text';

export default function Home({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <View style={style.image}>
                    <Image source={require('../../assets/icon/logo_icon.png')} />
                </View>
            </View>
            <View style={style.order}>
                <View style={style.product}>
                    <Image source={require('../../assets/icon/Vector.png')} />
                </View>
                <Text style={{ textAlign: 'center' }} preset='h1'>Non-Contact {"\n"} Deliveries</Text>
                <Text style={{ marginTop: speching[0] }}>When placing an order, select the
                    option “Contactless delivery” and the courier will leave your order at the door.
                </Text>
                <View style={{ width: 325, marginTop: speching[0] }}>
                    <Button 
                        onPress={()=>{
                            navigation.navigate('Ditails')
                        }}
                    color='#0BCE83' title='ORDER NOW' />
                </View>
                <View style={{ width: 325, marginTop: 20 }}>
                    <Button color={color.blue} title='DISMISS' />
                </View>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.blue,

    },
    imageContainer: {
        flex: 1,
        backgroundColor: color.blue

    },
    image: {
        backgroundColor: '#CDFFB6',
        height: 55,
        width: 55,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: speching[0],
        marginVertical: speching[1]
    },
    order: {
        flex: 2,
        backgroundColor: '#F6F5F5',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        alignItems: 'center'

    },
    product: {
        height: 100,
        width: 100,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: speching[1]
    }
})