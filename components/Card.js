import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'
import { AddButton } from './AddButton'


export class Card extends React.Component{
    render(){
        return(
            <View style={styles.itemContainer}>
                <View style={styles.imgContainer}>
                    <Image source={this.props.uri} style={styles.img}/>
                </View>
                <Text style={styles.itemName}>{this.props.name}</Text>
                <Text style={styles.itemInfo}>{this.props.info}</Text>
                <View style={styles.row}>
                    <Text style={styles.price}>
                        {this.props.price}
                    </Text>
                    <AddButton
                        action={this.props.action}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        width: 150,
        height: 200,
        padding: 10,
        justifyContent: 'flex-end',
        borderRadius: 15,
        backgroundColor: '#fff',
        borderColor: '#E2E2E2',
        borderWidth: 1,
        margin: 10,
    },
    imgContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '70%',
        height: 100,
        resizeMode: 'contain',
    },
    itemName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '800',
    },
    itemInfo: {
        fontSize: 14,
        color: '#7C7C7C',
        fontWeight: '400',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        color: '#181725',
        fontSize: 18,
        fontWeight: '600'
    },
})