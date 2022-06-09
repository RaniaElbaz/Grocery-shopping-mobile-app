import React, {Component, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TextInput,
    Pressable,
} from 'react-native'
import auth from '@react-native-firebase/auth'
import {ArrowButton} from '../components/ArrowButton'


export function Verify ({route, navigation}){
    const {number} = route.params
    const [confirm, setConfirm] = useState(route.params)
    const [code, setCode] = useState('')

    async function confirmCode() {
        try {
            await confirm.confirm(code)
        } catch (error) {
            alert('Login Failed');
        }
    }

    async function resendCode() {
        const confirmation = await auth().signInWithPhoneNumber(number);
        setConfirm(confirmation);
    }

    return(
        <ImageBackground source={require('../assets/bgcolor.png')} style={styles.bg}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Number')}>
                    <Image source={require('../assets/arrowb.png')} style={styles.back}/>
                </Pressable>
            </View>
            <View style={styles.fragment}>
                <Text style={styles.textStyle}>
                    Enter your 4-digit code
                </Text>
                <Text style={styles.code}>
                    Code
                </Text>
                <TextInput
                    placeholder='- - - -'
                    placeholderTextColor={'#181725'}
                    value = {code}
                    onChangeText = {(newcode) => setCode(newcode)}
                    style = {styles.input}
                />
            </View>
            <View style={styles.footer}>
                <Pressable onPress={resendCode}>
                    <Text style={styles.footerTxt}>
                        Resend Code
                    </Text>
                </Pressable>
                <ArrowButton 
                    bgColor="#53b175" 
                    action={confirmCode }
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#C4C4C4',
    },
    header: {
        padding: 20,
        height: 100,
    },
    back: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    fragment: {
        flex: 1,
        paddingHorizontal: 20,

    },
    textStyle: {
        color: '#181725',
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 30,
    },
    code: {
        color: '#7C7C7C',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 20,
    },
    input: {
        marginBottom: 10, 
        fontSize: 18, 
        fontWeight: '500',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 50,
        paddingHorizontal: 20,
    },
    footerTxt: {
        color: '#53B175'
    }
})