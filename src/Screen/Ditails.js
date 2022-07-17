import { View, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Text from '../Componets/Text'
import { color } from '../Theme/Color'
import { speching } from '../Theme/Speching'

export default function Ditails() {
    return (
        <View style={style.container}>
            <View style={style.imgContainer}>
                <Image source={require('../../assets/image/media.png')} />
            </View>
            <View style={style.cart}>
                <View style={style.info}>
                    <Text preset='h2'>Boston Lettuce</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: speching[3] }} >
                        <Text preset='h2'>1.10</Text>
                        <Text>€ / piece</Text>
                    </View>
                    <Text style={{ color: color.green }}>~ 150 gr / piece</Text>
                    <Text preset='h3' style={{ marginTop: speching[3] }}>Spain</Text>
                    <Text style={{marginTop: speching[3], textAlign: 'justify'}}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable,
                        but sometimes for its stem and seeds. Lettuce is most often used for salads,
                        although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
                </View>
                <View style={style.btnContainer}>
                <Pressable style={style.btnHeart}>
                        <Image source={require('../../assets/icon/Heart.png')} />
                    </Pressable>
                    <Pressable style={style.btnCart}>
                        <Text style={{color: 'white'}} >ADD TO CART</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgContainer: {
        flex: 1,

    },
    cart: {
        flex: 2,
        backgroundColor: color.white,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,

    },
    info: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: speching[0],
        justifyContent: 'space-around'
    },
    btnHeart: {
        borderColor: '#D9D0E3',
        borderWidth: 1, 
        height: 50, 
        width: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white',
        borderRadius: 20
    },
    btnCart: {
        borderColor: '#D9D0E3',
        borderWidth: 1, 
        height: 50, 
        width: 230, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: color.green,
        borderRadius: 20
    }
})
