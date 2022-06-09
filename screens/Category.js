import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import {Card} from '../components/Card'
import CustomIcon from '../components/CustomIcons.js'

export class Category extends React.Component{
    
    state = {
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
        ],
        catData : this.props.route.params
    }

    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.header}>
                    <Pressable onPress={()=>this.props.navigation.navigate('Shop')} style={{width:30}}>
                        <CustomIcon
                            name="back"
                            color={'#212121'}
                            size={18}
                        />
                    </Pressable>
                    <Text style={styles.head}>
                        {this.state.catData.category}
                    </Text>
                    <Pressable onPress={()=>this.props.navigation.navigate('Filter')} style={{width:30}}>
                        <CustomIcon
                            name="filter"
                            color={'#212121'}
                            size={18}
                        />
                    </Pressable>
                </View>
                <FlatGrid
                    itemDimension={130}
                    spacing={10}
                    data={this.state.catData.items}
                    style={styles.gridView}
                    renderItem={({ item }) => (
                        <Card
                            name = {item.name}
                            uri = {item.img}
                            info = {item.quantity}
                            price = {item.price}
                        />
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
        justifyContent:'space-around',
        alignItems: 'center',
    },
    head: {
        color: '#181725',
        fontSize: 20,
        fontWeight: '600',
    },
    gridView: {
        flex: 1,
        width: '100%',
        marginTop: 10,
    },
})