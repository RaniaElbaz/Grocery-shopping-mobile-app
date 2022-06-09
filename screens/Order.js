import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Pressable,
    Linking, 
} from 'react-native'
import {MainButton} from '../components/MainButton'

export class Order extends React.Component{
    render(){
        return(
            <ImageBackground source={require('../assets/bgcolor.png')} style={styles.bg}>
                <View style={styles.fragmet}>
                    <Image source={require('../assets/tick.png')} style={styles.banner}/>
                    <Text style={styles.heading}>
                        Your Order has been accepted
                    </Text>
                    <Text style={styles.txt}>
                        Your items has been placed and is on it's way to being processed
                    </Text>
                </View>
                <View style={styles.btns}>
                    <MainButton
                        title = 'Track Order'
                        action={()=>this.props.navigation.navigate('Map')}
                    />
                    <Pressable style={styles.back} onPress={()=>this.props.navigation.navigate('Shop')}>
                        <Text style={styles.backText}>
                            Back to home
                        </Text>
                    </Pressable>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        padding: '5%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fragmet: {
        flex: 1,
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: '10%',
    },  
    banner: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },  
    heading: {
        color: '#181725',
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    }, 
    txt: {
        color: '#7C7C7C',
        fontSize: 16,
        textAlign: 'center',
    },
    btns: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    },
    back: {
        width: '80%',
        height: 50,
        marginTop: 20,
    },
    backText: {
        textAlign: 'center',
        color: '#181725',
        fontSize: 18,
    },
})