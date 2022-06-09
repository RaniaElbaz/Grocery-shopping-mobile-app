import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    FlatList, 
} from 'react-native'
import Dialog from "react-native-dialog"
import ActionSheet, { SheetManager } from "react-native-actions-sheet"
import CustomIcon from '../components/CustomIcons.js'
import { MainButton } from '../components/MainButton.js'

export class Cart extends Component{
    state = {
        payDetails: ['Delivery',],
        alertVisible : false,
        addedItems :  this.props.route.params,
        // items : [],
        /* Mock Data */
        items : [
            {
                id: 0,
                name: 'Bell Pepper Red',
                img: require('../assets/pepper.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 1,
                rate : 3,
                nutrition : '100gr',
            },
            {
                id: 1,
                name: 'apple',
                img: require('../assets/apple.png'),
                quantity: '1kg, Price',
                price: '$4.99',
                number: 1,
                rate : 3,
                nutrition : '100gr',
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
            
        ]
    }

    addnOne = (idx) => {
        let arr = this.state.items
        arr[idx].number += 1
        this.setState({
            items : arr
        })
    }

    minusOne = (idx) => {
        if(this.state.items[idx].number > 0){
            let arr = this.state.items
            arr[idx].number -= 1
            this.setState({
                items : arr
            })
        }
    }

    // addItem = () => {
    //     this.setState({
    //         items : this.state.addedItems
    //     })
    // }

    removeItem = (idx) => {
        let len = this.state.items.length
        let tmp = this.state.items
        if (idx < len && idx > -1) {
            tmp.splice(idx, 1)
        }
        this.setState({
            items: tmp
        })
    }

    handleCancel = () => {
        this.setState({
            alertVisible : false
        })
    }

    checkout = () => {
        let len = this.state.items.length
        if ( len > 0){
            console.log('items',this.state.items)
            SheetManager.show("checkout")
        } else {
            console.log(this.state.items)
            this.setState({
                alertVisible : true
            })
        }
    }
    
    render(){
        return(
            <View style={styles.container}>    
                <View style={styles.header}>
                    <Text style={styles.h1}>
                       My Cart
                    </Text>
                </View>
                <FlatList
                    style={{width:'100%'}}
                    data={this.state.items}
                    renderItem={({ item, index }) => (
                        <View style={styles.row}>
                            <View style={styles.imgContainer} >
                                <Image source={item.img} style={styles.img}/>
                            </View>
                            <View style={styles.center}>
                                <Text style={styles.listTitle}>
                                    {item.name}
                                </Text>
                                <Text style={styles.desc}>
                                    {item.quantity}
                                </Text>
                                <View style={styles.btns}>
                                    <Pressable style={styles.btn} onPress={()=>this.minusOne(index)}>
                                        <CustomIcon
                                            name='minus'
                                            color={'#B3B3B3'}
                                            size={14}
                                        />
                                    </Pressable>
                                    <Text style={styles.number}>
                                        {item.number}
                                    </Text>
                                    <Pressable style={styles.btn} onPress={()=>this.addnOne(index)}>
                                        <CustomIcon
                                            name='add'
                                            color={'#53B175'}
                                            size={14}
                                        />
                                    </Pressable>
                                </View>
                            </View>
                            <View style={styles.right}>
                                <Pressable onPress={()=>this.removeItem(index)}>
                                    <CustomIcon
                                        name='close'
                                        size={14}
                                        color={'#212121'}
                                    />
                                </Pressable>
                                <Text style={styles.price}>
                                    {item.price}
                                </Text>
                            </View>
                        </View>
                    )}
                />
                <View style={styles.checkoutBtn}>
                    <MainButton title='Go To Checkout' action={this.checkout}/>
                    <Dialog.Container 
                        visible={this.state.alertVisible}
                        verticalButtons = {true}
                        style={{borderRadius:25}}
                    >
                        <Dialog.Title onPress={this.handleCancel}>
                            <CustomIcon name='close' size={16} color={'#181725'}/>
                        </Dialog.Title>
                        <Dialog.Description>
                            <View style={styles.alertImgContainer}>
                                <Image style={styles.alertImg} source={require('../assets/pack.png')}/>
                                <Text style={styles.alertH1}>
                                    Oops! Order Failed
                                </Text>
                                <Text style={styles.alertTxt}>
                                    Something went tembly wrong
                                </Text>
                            </View>
                        </Dialog.Description>
                        <Dialog.Button style={styles.alertBtn} label="Please Try Again" color={'#FFF9FF'} onPress={this.handleCancel} />
                        <Dialog.Button label="Back to home" color={'#181725'} onPress={()=>this.props.navigation.navigate('Shop')} />
                    </Dialog.Container>
                    <ActionSheet id="checkout">
                        <View style={styles.sheetContainer}>
                        <View style={styles.sheetHeader}>
                            <Text style={styles.sheetH1}>Checkout</Text>
                            <Pressable onPress={()=>SheetManager.hide("checkout")}>
                            <CustomIcon name='close' color={'#181725'} size={16}/>
                            </Pressable>
                        </View>
                        <View style={styles.sheetRow}>
                            <Text style={styles.sheetH2}>
                                Delivery
                            </Text>
                            <View style={styles.sheetRight}>
                                <Text style={styles.sheetH3}>
                                    Select Method
                                </Text>
                                <CustomIcon name='forward' color={'#181725'} size={10} style={styles.icon}/>
                            </View>
                        </View>
                        <View style={styles.sheetRow}>
                            <Text style={styles.sheetH2}>
                                Payment
                            </Text>
                            <View style={styles.sheetRight}>
                                <Image style={styles.card} source={require('../assets/card.png')}/>
                                <CustomIcon name='forward' color={'#181725'} size={10} style={styles.icon}/>
                            </View>
                        </View>
                        <View style={styles.sheetRow}>
                            <Text style={styles.sheetH2}>
                               Promo Code
                            </Text>
                            <View style={styles.sheetRight}>
                                <Text style={styles.sheetH3}>
                                    Pick discount
                                </Text>
                                <CustomIcon name='forward' color={'#181725'} size={10} style={styles.icon}/>
                            </View>
                        </View>
                        <View style={styles.sheetRow}>
                            <Text style={styles.sheetH2}>
                                Total Cost
                            </Text>
                            <View style={styles.sheetRight}>
                                <Text style={styles.sheetH3}>
                                    $13.97
                                </Text>
                                <CustomIcon name='forward' color={'#181725'} size={10} style={styles.icon}/>
                            </View>
                        </View>
                        <View style={styles.policy}>
                            <Text style={styles.policyTxt}>
                                By placing an order you agree to our
                            </Text>
                            <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>
                                Terms
                            </Text>
                            <Text style={styles.policyTxt}>
                                And 
                            </Text>
                            <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>
                                Conditions.
                            </Text>
                        </View>
                        <MainButton title='Place Order' action={()=>this.props.navigation.navigate('Order')}/>
                        </View>
                    </ActionSheet>
                    
                </View>
            </View>
        )
    }

    // componentDidMount(){
    //     this.updateData()
    // }
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
    h1: {
        color: '#181725',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    row: {
        width: '100%',
        height: 125,
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
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    center: {
        flex: 1,
        marginLeft: 20,
        height: '100%',
        justifyContent: 'space-between',
        paddingVertical: 20,
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
    btns: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
    },
    btn: {
        borderColor: '#E2E2E2',
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        width: 40,
        textAlign: 'center',
        color: "#181725",
        fontSize: 16,
    },  
    right: {
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    price: {
        marginRight: 10, 
        color: '#181725', 
        fontSize: 16,
        fontWeight: '600',
    },
    checkoutBtn: {
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical:10,
    },
    alertBtn: {
        backgroundColor: '#53B175', 
        paddingVertical: 20, 
        paddingHorizontal: 50, 
        marginBottom: 10, 
        borderRadius: 18, 
        textAlign:'center'
    },
    alertImgContainer: {
        alignItems: 'center',
        width: '100%',
    },
    alertImg: {
        resizeMode: 'contain',
        width: 250,
        height: 200,
        marginBottom: 20,
    },
    alertH1: {
        color: '#181725',
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 10,
    },
    alertTxt: {
        color: '#7C7C7C',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 20,
    },
    sheetContainer: {
        alignItems: 'center', 
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    sheetHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
    },
    sheetH1: {
        color: '#181725',
        fontSize: 24,
        fontWeight: '500',
    },
    sheetRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },
    sheetH2: {
        color: '#7C7C7C',
        fontSize: 18,
        fontWeight: '500',
    },
    sheetH3: {
        color: '#181725',
        fontSize: 16,
        fontWeight: '500',
    },
    sheetRight: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    icon: {
        marginLeft: 10,
    },
    policy: {
        flexDirection: 'row',
        marginVertical: 20,
        flexWrap: 'wrap',
    },
    policyTxt: {
        color: '#7C7C7C',
        fontSize: 14,
    },
    link: {
        color: '#181725',
        fontWeight: '500',
        marginHorizontal: 2,
    }, 
})