import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    FlatList 
} from 'react-native'
import CustomIcon from '../components/CustomIcons.js'
import { MainButton } from '../components/MainButton.js'

export class Fav extends Component{
    state = {
        favItem : this.props.route.params,
        Favs : [
            {
                name: 'Sprite Can',
                img: require('../assets/sprite.png'),
                quantity: '325ml, Price',
                price: '$1.50',
            },
            {
                name: 'Sprite Can',
                img: require('../assets/sprite.png'),
                quantity: '325ml, Price',
                price: '$1.50',
            },
            {
                name: 'Apple & Grape Juice',
                img: require('../assets/juice.png'),
                quantity: '2L, Price',
                price: '$15.50',
            },
            {
                name: 'Sprite Can',
                img: require('../assets/sprite.png'),
                quantity: '325ml, Price',
                price: '$1.50',
            },
            {
                name: 'Sprite Can',
                img: require('../assets/sprite.png'),
                quantity: '325ml, Price',
                price: '$1.50',
            },
        ]
    }

    render(){
        return(
            <View style={styles.container}>    
                <View style={styles.header}>
                    <Text style={styles.heading1}>
                        Favourite
                    </Text>
                </View>
                <FlatList
                    style={{width:'100%'}}
                    data={this.state.Favs}
                    renderItem={({ item }) => (
                        <Pressable style={styles.row}>
                            <View style={styles.imgContainer} >
                                <Image
                                    source={item.img}
                                    style={styles.img}
                                />
                            </View>
                            <View style={styles.col}>
                                <Text style={styles.listTitle}>
                                    {item.name}
                                </Text>
                                <Text style={styles.desc}>
                                    {item.quantity}
                                </Text>
                            </View>
                            <Text style={styles.price}>
                                {item.price}
                            </Text>
                            <CustomIcon
                                name='forward'
                                size={14}
                                color={'#212121'}
                            />
                        </Pressable>
                    )}
                />
                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', paddingVertical:10}}>
                    <MainButton
                        title = 'Add All To Cart'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
	},
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
        padding: 20,
    },
    heading1: {
        color: '#181725',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    row: {
        width: '100%',
        height: 80,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
    },
    imgContainer:{
        marginRight: 5,
    },
    img: {
        width: 30,
        resizeMode: 'contain',
    },
    col: {
        flex: 1,
        marginLeft: 20,
    },
    listTitle: {
        fontSize: 16,
        color: '#181725',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    desc: {
        marginTop: 5,
        fontSize: 14,
        color: '#7C7C7C',
        fontWeight: '400',
    },
    price: {
        marginRight: 10, 
        color: '#181725', 
        fontSize: 16,
        fontWeight: '600',
    },
})