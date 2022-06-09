import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    FlatList 
} from 'react-native'
import auth from '@react-native-firebase/auth'
import CustomIcon from '../components/CustomIcons.js'

export class Account extends Component{
    state = {
        /* Mock Data */
        user: {
            email: 'rayo@gmail.com',
            name: 'Rania Elbaz',
            img: require('../assets/me.jpg')
        },
        accountDetails : [
            {
                name: 'Orders',
                icon: 'bag',
            },
            {
                name: 'My Details',
                icon: 'id',
            },
            {
                name: 'Delivery Address',
                icon: 'pin',
            },
            {
                name: 'Payment Methods',
                icon: 'pay',
            },
            {
                name: 'Promo Code',
                icon: 'ticket',
            },
            {
                name: 'Notification',
                icon: 'bell',
            },
            {
                name: 'Help',
                icon: 'question',
            },
            {
                name: 'About',
                icon: 'exclaim'
            },
        ]
    }

    handleSignOut = () => {
        auth()
        .signOut()
    }

    render(){
        return(
            <View style={styles.container}>    
                <View style={styles.header}>
                    <View style={styles.dp}>
                        <Image
                            source={this.state.user.img}
                            style={styles.dpimg}
                        />
                    </View>
                    <View style={styles.col}>
                        <View style={styles.user}>
                            <Text style={styles.username}>
                                {this.state.user.name}
                            </Text>
                            <Pressable>
                                <CustomIcon
                                    name='pen'
                                    color={'#53B175'}
                                    size ={15}
                                />
                            </Pressable>
                        </View>
                        <Text style={styles.mail}>
                            {this.state.user.email}
                        </Text>
                    </View>
                </View>
                <FlatList
                    style={{width:'100%'}}
                    data={this.state.accountDetails}
                    renderItem={({ item }) => (
                        <Pressable style={styles.row}>
                            <View style={styles.icon}>
                                <CustomIcon
                                    name={item.icon}
                                    size={20}
                                    color={'#181725'}
                                />
                            </View>
                            <Text style={styles.listTitle}>
                                {item.name}
                            </Text>
                            <CustomIcon
                                name='forward'
                                size={14}
                                color={'#212121'}
                            />
                        </Pressable>
                    )}
                />
                <Pressable style={styles.Btn} onPress={this.handleSignOut}>
                    <Image source={require('../assets/logout.png')} style={styles.signinLogo}/>
                    <Text  style={styles.signinText}>
                        Log Out
                    </Text>
                </Pressable>
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
        height: 125,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
        padding: 20,
    },
    dp: {
        marginRight: 10,
    },
    dpimg: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    col: {

    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        color: '#181725',
        fontSize: 20,
        fontWeight: '700',
        marginRight: 5,
    },
    mail: {
        color: '#7C7C7C',
        fontSize: 16,
    },
    row: {
        width: '100%',
        height: 50,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
    },
    icon: {
        width: 30,
    },
    listTitle: {
        flex: 1,
        marginLeft: 20,
        fontSize: 18,
        color: '#181725',
        fontWeight: '600',
        textAlign: 'left',
    },
    Btn: {
        flexDirection: 'row',
        backgroundColor: '#F2F3F2',
        width: '90%',
        height: 50,
        borderRadius: 13,
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    signinText: {
        color: '#53B175',
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        fontWeight: '600',
    },
    signinLogo: {
        height: 25,
        resizeMode: 'contain',
    },
})