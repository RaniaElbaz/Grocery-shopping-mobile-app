import React from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
} from 'react-native'
import Swiper from 'react-native-swiper' 
import CustomIcon from '../components/CustomIcons.js'
import {MainButton} from '../components/MainButton'

export class Detail extends React.Component{
    state = {
        stars : [],
        show : true,
        details : this.props.route.params,
    }

    addnOne = () => {
        let arr = this.state.details
        arr.details.number += 1
        this.setState({
            details : arr
        })
    }

    minusOne = () => {
        if(this.state.details.details.number > 0){
            let arr = this.state.details
            arr.details.number -= 1
            this.setState({
                details : arr
            })
        }
    }

    drawRate = () => {
        for (let i=0; i<this.state.details.details.rate; i++){
            this.state.stars.push(
                <CustomIcon name='star' color={'#F3603F'}/>
            )
        }
        return this.state.stars
    }

    toggleShow = () => {
        this.setState({
            show : !this.state.show 
        })
    }

    render(){
        return(
            <View style={styles.Container}>
                {console.log(this.state.details.details.name)}
                <View style={styles.header}>
                    <View style={styles.icons}>
                        <Pressable onPress={()=>this.props.navigation.goBack()}>
                        <CustomIcon
                            name="back"
                            color={'#212121'}
                            size={20}
                        />
                        </Pressable>
                        <CustomIcon
                            name="upload"
                            color={'#212121'}
                            size={20}
                        />
                    </View>
                    <Swiper 
                        loop = {true}
                        style={styles.bannerContainer}
                        activeDotColor = '#53B175'
                        activeDotStyle = {{width: 20}}
                    >
                    { 
                        this.state.details.details.banners.map((item, index) => (
                            <Image 
                                key = {index}
                                source = {item.img}
                                style = {styles.banner}
                            /> 
                        ))
                    }
                    </Swiper>
                </View>
                <View style={styles.fragmet}>
                    <View style={styles.heading}>
                        <Text style={styles.h1}>
                            {this.state.details.details.name}
                        </Text>
                        <Pressable>
                            <CustomIcon name="heart" color={'#7C7C7C'} size={16}/>
                        </Pressable>
                    </View>
                    <Text style={styles.txt}>
                        {this.state.details.details.quantity}
                    </Text>
                    <View style={styles.numbers}> 
                        <View style={styles.btns}>
                            <Pressable style={styles.btn} onPress={this.minusOne}>
                                <CustomIcon
                                    name='minus'
                                    color={'#B3B3B3'}
                                    size={16}
                                />
                            </Pressable>
                            <Text style={styles.number}>
                                {this.state.details.details.number}
                            </Text>
                            <Pressable style={styles.btn} onPress={this.addnOne}>
                                <CustomIcon
                                    name='add'
                                    color={'#53B175'}
                                    size={16}
                                />
                            </Pressable>
                        </View>
                        <Text style={styles.price}>
                            {this.state.details.details.price}
                        </Text>
                    </View>
                    <View style={styles.detail}>
                        <View>
                            <Text style={styles.h3}>
                                Product Detail
                            </Text>
                            {
                                (this.state.show) ?
                                <Text style={styles.desc}>
                                    {this.state.details.details.desc}
                                </Text>
                                :
                                <View></View>
                            }
                        </View>
                        <Pressable onPress={this.toggleShow}>
                            <CustomIcon name="down" color={'#181725'} size={20}/>
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.h3}>
                            Nutrition
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.box}>
                                {this.state.details.details.nutrition}
                            </Text>
                            <CustomIcon name="forward" color={'#181725'} size={14} style={{marginLeft: 20}}/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.h3}>
                            Review
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            {this.drawRate()}
                            <CustomIcon name="forward" color={'#181725'} size={14} style={{marginLeft: 20}}/>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <MainButton
                        title = 'Add To Basket'
                        action = {
                            () => { this.props.navigation.navigate('Cart')
                        }}
                    />
                </View>
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
        flex: 1,
        backgroundColor: '#F2F3F2',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    bannerContainer: {
    },
    banner: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }, 
    fragmet: {
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    }, 
    heading: {
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
    },
    h1: {
        color: '#181725',
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
    }, 
    txt: {
        color: '#7C7C7C',
        fontSize: 16,
        width: '100%',
        marginBottom: 20,
    },
    numbers: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
        paddingBottom: 15,
    },
    btns: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
    },
    number: {
        borderColor: '#E2E2E2',
        borderWidth: 1,
        width: 30,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 15,
    },
    price: {
        color: '#181725',
        fontSize: 24,
        fontWeight:'bold',
    },
    detail: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
        paddingVertical: 5,
    },
    desc: {
        color: '#7C7C7C',
        fontSize: 13,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
    },
    h3: {
        fontSize: 18,
        fontWeight: '600',
        color: '#181725',
    },
    box: {
        backgroundColor: '#EBEBEB',
        color: '#7C7C7C',
        fontSize: 9,
        borderRadius: 5,
        padding: 2,
    },
    footer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
})