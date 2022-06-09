import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Searchbar} from 'react-native-paper' 
import Swiper from 'react-native-swiper' 
import {Card} from '../components/Card'

export class Home extends React.Component{
    state = {
        index: '',
        query: '',
        txtzone : '?',
        txtarea : '?',
        items: [],
        clicked: false,
        /* Mock Data */
        banners : [
            {
                img : require('../assets/banner1.png'),
            },
            {
                img : require('../assets/banner2.png'),
            },
            {
                img : require('../assets/banner3.png'),
            },
        ],
        ExItems : [
            {
                name: 'Bell Pepper Red',
                img: require('../assets/pepper.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 3,
                banners : [
                    {
                        img: require('../assets/pepper.png')
                    },
                    {
                        img: require('../assets/pepper.png')
                    },
                ],
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
            {
                name: 'apple',
                img: require('../assets/apple.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 1,
                banners : [
                    {
                        img: require('../assets/apple.png')
                    },
                    {
                        img: require('../assets/apple.png')
                    },
                ],
                rate : 5,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
            {
                name: 'Banana',
                img: require('../assets/banana.png'),
                quantity: '1kg, Price',
                price: '$5.99',
                number: 1,
                banners : [
                    {
                        img: require('../assets/banana.png')
                    },
                    {
                        img: require('../assets/banana.png')
                    },
                ],
                rate : 0,
                nutrition : '300gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'                
            },
            {
                name: 'ginger',
                img: require('../assets/ginger.png'),
                quantity: '50gm, Price',
                price: '$4.99',
                number: 2,
                banners : [
                    {
                        img: require('../assets/ginger.png')
                    },
                    {
                        img: require('../assets/ginger.png')
                    },
                ],
                rate : 4,
                nutrition : '50gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
            {
                name: 'bebs',
                img: require('../assets/bebs.png'),
                quantity: '500ml, Price',
                price: '$6.99',
                number: 1,
                banners : [
                    {
                        img: require('../assets/bebs.png')
                    },
                    {
                        img: require('../assets/bebs.png')
                    },
                ],
                rate : 3,
                nutrition : '500ml',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
        ],
        BestSelling : [
            { 
                img: require('../assets/pepper.png'),
                name: 'Bell Pepper Red',
                quantity: '1kg, Priceg',
                price: '$4.99',
                number: 1,
                banners : [
                    {
                        img: require('../assets/pepper.png')
                    },
                    {
                        img: require('../assets/pepper.png')
                    },
                ],
                rate : 5,
                nutrition : '1kg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
            { 
                img: require('../assets/ginger.png'),
                name: 'Ginger',
                quantity: '250gm, Priceg',
                price: '$4.99',
                number: 3,
                banners : [
                    {
                        img: require('../assets/ginger.png')
                    },
                    {
                        img: require('../assets/ginger.png')
                    },
                ],
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
            { 
                img: require('../assets/banana.png'),
                name: 'Organice Bananas',
                quantity: '7pcs, Priceg',
                price: '$4.99',
                number: 1,
                banners : [
                    {
                        img: require('../assets/banana.png')
                    },
                    {
                        img: require('../assets/banana.png')
                    },
                ],
                rate : 3,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
            {
                name: 'apple',
                img: require('../assets/apple.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 1,
                banners : [
                    {
                        img: require('../assets/apple.png')
                    },
                    {
                        img: require('../assets/apple.png')
                    },
                ],
                rate : 5,
                nutrition : '100gr',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
            },
        ],
        groceries : {
            categories : [{
                    img: require('../assets/pulses.png'),
                    name: 'Pulses',
                    code: '#fef1e4',
                },
                {
                    img: require('../assets/rice.png'),
                    name: 'Rice',
                    code: '#e5f3ea',
                },
                {
                    img: require('../assets/pulses.png'),
                    name: 'Pulses',
                    code: '#fef1e4',
                },
                {
                    img: require('../assets/pulses.png'),
                    name: 'Pulses',
                    code: '#fef1e4',
                },
            ],
            items : [
                { 
                    img: require('../assets/beef.png'),
                    name: 'Beef Bone',
                    quantity: '1kg, Priceg',
                    price: '$4.99',
                    number: 1,
                    banners : [
                        {
                            img: require('../assets/beef.png')
                        },
                        {
                            img: require('../assets/beef.png')
                        },
                    ],
                    rate : 5,
                    nutrition : '100gr',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
                },
                { 
                    img: require('../assets/chicken.png'),
                    name: 'Broiler Chicken',
                    quantity: '1kg, Priceg',
                    price: '$4.99',
                    number: 1,
                    banners : [
                        {
                            img: require('../assets/chicken.png')
                        },
                        {
                            img: require('../assets/chicken.png')
                        },
                    ],
                    rate : 5,
                    nutrition : '100gr',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
                },
                {
                    name: 'bebs',
                    img: require('../assets/bebs.png'),
                    quantity: '500ml, Price',
                    price: '$6.99',
                    number: 1,
                    banners : [
                        {
                            img: require('../assets/bebs.png')
                        },
                        {
                            img: require('../assets/bebs.png')
                        },
                    ],
                    rate : 3,
                    nutrition : '500ml',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'
                },
                {
                    name: 'Banana',
                    img: require('../assets/banana.png'),
                    quantity: '1kg, Price',
                    price: '$5.99',
                    number: 1,
                    banners : [
                        {
                            img: require('../assets/banana.png')
                        },
                        {
                            img: require('../assets/banana.png')
                        },
                    ],
                    rate : 0,
                    nutrition : '300gr',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae leo in ex ullamcorper ullamcorper. Nullam quis vulputate tellus. Ut porttitor lectus ut turpis venenatis'                
                },
        ]},
    }

    addItem = (item) => {
        this.state.items.push(item)
        console.log(this.state.items)
    }
    
    getData = async () => {
        try {
          const zone = await AsyncStorage.getItem('zone')
          const area = await AsyncStorage.getItem('area')
          if(zone !== null && area !== null){
            //value previously stored
            this.setState({
                txtzone : zone,
                txtarea : area
            })
          }
        } catch(e) {
          //error reading value
          console.log('retrieve error')
        }
        
    }

    render(){
        return(
            <ScrollView style={styles.Container}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image source={require('../assets/carroto.png')} style={styles.logoImg}/>
                    </View>
                    <Pressable style={styles.loc} onPress={()=>this.props.navigation.navigate('Locate')}>
                        <Image source={require('../assets/loc.png')} style={styles.locLogo}/>
                        <Text style={styles.locTxt}>
                            {this.state.txtarea}, {this.state.txtzone}
                        </Text>
                    </Pressable>
                    <Searchbar
                        placeholder="Search Store"
                        value = {this.state.query}
                        onChangeText = {this.setQuery}
                        icon = {require('../assets/search.png')}
                        style = {styles.search}
                        onFocus = {()=>this.props.navigation.navigate('Search')}
                    />
                </View>
                <Swiper 
                    autoplay = {true}
                    style={styles.bannerContainer}
                    activeDotColor = '#53B175'
                    activeDotStyle = {{width: 20}}
                >
                    { 
                        this.state.banners.map((item, index) => (
                            <Image 
                                key = {index}
                                source = {item.img}
                                style = {styles.banner}
                            /> 
                        ))
                    }
                </Swiper>
                <View style={styles.subhead}>
                    <Text style={styles.subheadTxt}>
                        Exclusive Offer
                    </Text>
                    <Pressable style={styles.subheadLink} onPress={()=>this.props.navigation.navigate('Category', {category : 'Exclusive Offer', items : this.state.ExItems})}>
                        <Text style={styles.seeall}>
                            see all
                        </Text>
                    </Pressable>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        this.state.ExItems.map((item, index) => (
                            <Pressable onPress={()=>{this.props.navigation.navigate('Detail', {details: item})}}>
                                <Card
                                    key = {index}
                                    name = {item.name}
                                    uri = {item.img}
                                    info = {item.quantity}
                                    price = {item.price}
                                    action = {()=>this.addItem(item)}
                                />
                            </Pressable>
                        ))
                    }
                </ScrollView>
                <View style={styles.subhead}>
                    <Text style={styles.subheadTxt}>
                        Best Selling
                    </Text>
                    <Pressable style={styles.subheadLink} onPress={()=>this.props.navigation.navigate('Category', {category : 'Best Selling', items : this.state.BestSelling})}>
                        <Text style={styles.seeall}>
                            see all
                        </Text>
                    </Pressable>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        this.state.BestSelling.map((item, index) => (
                            <Pressable onPress={()=>{this.props.navigation.navigate('Detail', {details: item})}}>
                            <Card
                                key = {index}
                                name = {item.name}
                                uri = {item.img}
                                info = {item.quantity}
                                price = {item.price}
                                action = {()=>this.addItem(item)}
                            />
                            </Pressable>
                        ))
                    }
                </ScrollView>
                <View style={styles.subhead}>
                    <Text style={styles.subheadTxt}>
                        Groceries
                    </Text>
                    <Pressable style={styles.subheadLink} onPress={()=>this.props.navigation.navigate('Category', {category : 'Groceries', items : this.state.groceries.items})}>
                        <Text style={styles.seeall}>
                            see all
                        </Text>
                    </Pressable>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        this.state.groceries.categories.map((item, index) => (
                            <View key={index} style={[styles.category, {backgroundColor: item.code}]}>
                                <Image
                                    source={item.img}
                                    style={styles.img}
                                />
                                <Text style={styles.txt}>
                                    {item.name}
                                </Text>
                            </View>
                        ))
                    }
                </ScrollView>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                {
                    this.state.groceries.items.map((item, index) => (
                        <Pressable onPress={()=>{this.props.navigation.navigate('Detail', {details: item})}}>
                        <Card
                            key = {index}
                            name = {item.name}
                            uri = {item.img}
                            info = {item.quantity}
                            price = {item.price}
                            action = {()=>this.addItem(item)}
                        />
                        </Pressable>
                    ))
                }
                </ScrollView>
            </ScrollView>
        )
    }

    componentDidMount(){
        this.getData()
    }
    
    componentDidUpdate(){
        this.getData()
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: '5%',
        backgroundColor: '#fff',
    },
    header: {
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    logo: {
        width: 40,
        height: 40,
    },
    logoImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    loc: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    locLogo: {
        width: 20,
        marginRight: 10,
        resizeMode: 'contain',
    },
    locTxt: {
        color: '#4C4F4D',
        fontSize: 18,
        fontWeight: '600',
    },
    search: {
        backgroundColor: '#F2F3F2',
        borderRadius: 15,
        height: 40,
    },
    bannerContainer: {
        height: 150,
        paddingHorizontal: '5%',
    },
    banner: {
        width: '90%',
        height: '100%',
        resizeMode: 'contain',
    },
    subhead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    },
    subheadTxt: {
        color: '#181725',
        fontSize: 24,
        fontWeight: '600',
    }, 
    seeall: {
        color: '#53B175',
        fontSize: 16,
        fontWeight: '600',
    },
    category: {
        width: 250,
        height: 100,
        marginTop: 10,
        marginLeft: 15,
        paddingHorizontal: 10,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: '30%',
        resizeMode: 'contain',
    },
    txt: {
        flex: 1,
        marginLeft: 10,
        color: '#3E423F',
        fontSize: 20,
        fontWeight: '600'
    }
})