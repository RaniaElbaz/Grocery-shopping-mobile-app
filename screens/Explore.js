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

export class Explore extends React.Component{
    state = {
        query: '',
        /* Mock Data */
        Items: [
            { 
                img: require('../assets/fruits.png'),
                name: 'Fresh Fruits & Vegetable',
                code: '#eef7f1',
                stroke: '#c9e6d3',
            },
            { 
                img: require('../assets/oil.png'),
                name: 'Cooking Oil & Ghee',
                code: '#fef6ed',
                stroke: '#fde3c8',
            },
            { 
                img: require('../assets/meat.png'),
                name: 'Meat & Fish',
                code: '#fde8e4',
                stroke: '#fbcfc7',
            },
            { 
                img: require('../assets/bread.png'),
                name: 'Bakery & Snacks',
                code: '#f4ebf7',
                stroke: '#ecdcf1',
            },
            { 
                img: require('../assets/eggs.png'),
                name: 'Dairy & Eggs',
                code: '#fff8e5',
                stroke: '#fef1c9',
            },
            { 
                img: require('../assets/drink.png'),
                name: 'Beverages',
                code: '#edf7fc',
                stroke: '#dff0fa',
            },
            { 
                img: require('../assets/fruits.png'),
                name: 'Fresh Fruits & Vegetable',
                code: '#ece9fe',
                stroke: '#d8d2fc',
            },
            { 
                img: require('../assets/fruits.png'),
                name: 'Fresh Fruits & Vegetable',
                code: '#f9e2eb',
                stroke: '#f5cddc',
            },
        ],
        ExItems : [
            {
                id: 0,
                banners : [
                    {
                        img: require('../assets/pepper.png')
                    },
                    {
                        img: require('../assets/pepper.png')
                    },
                ],
                name: 'Bell Pepper Red',
                img: require('../assets/pepper.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 1,
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
            {
                id: 1,
                banners : [
                    {
                        img: require('../assets/apple.png')
                    },
                    {
                        img: require('../assets/apple.png')
                    },
                ],
                name: 'apple',
                img: require('../assets/apple.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 1,
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
            {
                id: 2,
                name: 'Banana',
                img: require('../assets/banana.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 1,
                rate : 3,
                nutrition : '100gr',
            },
            {
                id: 3,
                name: 'ginger',
                img: require('../assets/ginger.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 1,
                rate : 3,
                nutrition : '100gr',
            },
            {
                id: 4,
                name: 'bebs',
                img: require('../assets/bebs.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 1,
                rate : 3,
                nutrition : '100gr',
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
                    <Text style={styles.head}>
                        Find Products
                    </Text>
                    <Searchbar
                        placeholder="Search Store"
                        value = {this.state.query}
                        onChangeText = {this.setQuery}
                        icon = {require('../assets/search.png')}
                        style = {styles.search}
                    />
                </View>
                <FlatGrid
                    itemDimension={130}
                    data={this.state.Items}
                    style={styles.gridView}
                    spacing={10}
                    renderItem={({ item }) => (
                        (this.state.query === '')?
                        <Pressable 
                            onPress={() => this.props.navigation.navigate('Category', {category: item.name, items : this.state.ExItems})}
                            style={[styles.itemContainer, { backgroundColor: item.code }, {borderColor: item.stroke}]}
                        >
                        <Image source={item.img} style={styles.img}/>
                        <Text style={styles.itemName}>{item.name}</Text>
                        </Pressable>
                        :
                        (item.name.toUpperCase().includes(this.state.query.toUpperCase().trim())) ?
                        <Pressable 
                            onPress={() => this.props.navigation.navigate('Category', {category: item.name})}
                            style={[styles.itemContainer, { backgroundColor: item.code }, {borderColor: item.stroke}]}
                        >
                        <Image source={item.img} style={styles.img}/>
                        <Text style={styles.itemName}>{item.name}</Text>
                        </Pressable>
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
        padding: '5%',
        backgroundColor: '#fff',
    },
    header: {
        justifyContent:'center',
        alignItems: 'center',
    },
    head: {
        color: '#181725',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
    },
    search: {
        backgroundColor: '#F2F3F2',
        borderRadius: 15,
        height: 40,
    },
    gridView: {
        flex: 1,
        width: '100%',
        overflow: 'scroll',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
        backgroundColor: '#fff',
        borderColor: '#E2E2E2',
        borderWidth: 1,
    },
    img: {
        height: '80%',
        width: '80%',
        resizeMode: 'contain',
    },
    itemName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
    },
})