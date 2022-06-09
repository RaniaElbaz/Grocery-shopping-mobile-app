import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
} from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { Searchbar } from 'react-native-paper' 
import {Card} from '../components/Card'
import CustomIcon from '../components/CustomIcons.js'

const customData = require('../assets/data.json')


export class Search extends React.Component{
    
    state = {
        query: '',
        clicked: false,
        /* Mock Data */
        //Items: customData.fruits,
        // category : 'fruits',
        Items : [
            {
                img: require('../assets/apple.png'),
                name : 'Natural Red Apple',
                quantity : '1kg, Price',
                number : 1,
                price : '$4.99',
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis, '
            },
            {
                img: require('../assets/banana.png'),
                name : 'Banana',
                quantity : '1kg, Price',
                number : 1,
                price : '$4.99',
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis, '
            },
            {
                img: require('../assets/apple.png'),
                name : 'Natural Red Apple',
                quantity : '1kg, Price',
                number : 1,
                price : '$4.99',
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis, '
            },
            {
                img: require('../assets/banana.png'),
                name : 'Banana',
                quantity : '1kg, Price',
                number : 1,
                price : '$4.99',
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis, '
            },
            {
                img: require('../assets/apple.png'),
                name : 'Natural Red Apple',
                quantity : '1kg, Price',
                number : 1,
                price : '$4.99',
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis, '
            },
            {
                img: require('../assets/banana.png'),
                name : 'Banana',
                quantity : '1kg, Price',
                number : 1,
                price : '$4.99',
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis, '
            },
            {
                img: require('../assets/ginger.png'),
                name : 'Ginger',
                quantity : '1kg, Price',
                number : 1,
                price : '$4.99',
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis, '
            },
            {
                img: require('../assets/banana.png'),
                name : 'Banana',
                quantity : '1kg, Price',
                number : 1,
                price : '$4.99',
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis, '
            },
        ],
    }

    setQuery = (text) => {
        this.setState({
            query: text.trim()
        })
    }

    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.header}>
                    <Text>
                        {this.state.category}
                    </Text>
                    <Searchbar
                        placeholder="Search Store"
                        value = {this.state.query}
                        onChangeText = {this.setQuery}
                        icon = {require('../assets/search.png')}
                        style = {styles.search}
                    />
                    <Pressable onPress={()=>this.props.navigation.navigate('Cart')}>
                    <CustomIcon
                        name="cart"
                        color={'#212121'}
                        size={18}
                    />
                    </Pressable>
                </View>
                <FlatGrid
                    itemDimension={130}
                    spacing={10}
                    data={this.state.Items}
                    style={styles.gridView}
                    renderItem={({ item }) => (
                        (this.state.query === '')?
                        <Card
                            name = {item.name}
                            uri = {item.img}
                            info = {item.quantity}
                            price = {item.price}
                        />
                        :
                        (item.name.toUpperCase().includes(this.state.query.toUpperCase().trim())) ?
                        <Card
                            name = {item.name}
                            uri = {item.img}
                            info = {item.quantity}
                            price = {item.price}
                        />
                        :
                        <View></View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    search: {
        flex: 1,
        backgroundColor: '#F2F3F2',
        borderRadius: 15,
        height: 40,
        marginRight: 10,
    },
    gridView: {
        flex: 1,
        width: '100%',
        marginTop: 10,
    },
})