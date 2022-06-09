import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Pressable,
} from 'react-native';
import PhoneInput from 'react-native-phone-input'
import auth from '@react-native-firebase/auth'
import {ArrowButton} from '../components/ArrowButton'

export class Number extends Component{
    state = {
        phone: '',
        pickerData: null,
    }
    
    setPhone = (phoneNumber) => {
        this.setState({
            phone : phoneNumber
        })
    }
      
    PhoneSignIn = async (phoneNumber) => {
        if(phoneNumber !== ''){
            auth().signInWithPhoneNumber(phoneNumber)
            .then((confirmationResult) =>{
                this.props.navigation.navigate('Verify', {confirm : confirmationResult, number : phoneNumber })
            })
            .catch((error) => {
                if (error.code == 'auth/invalid-phone-number'){
                    alert('invalid phone number')
                }if (error.code == 'auth/too-many-requests'){
                    alert('too many requests \n try again later')
                } else {
                    console.log(error.code);
                    alert('Sign in failed.')
                }
            })
        } else {
            alert('please enter your phone number')
        }
    }

    render(){
        return(
            <ImageBackground source={require('../assets/bgcolor.png')} style={styles.bg}>
                <View style={styles.header}>
                    <Pressable onPress={() => this.props.navigation.navigate('Signin')}>
                        <Image source={require('../assets/arrowb.png')} style={styles.back}/>
                    </Pressable>
                </View>
                <View style={styles.fragment}>
                    <Text style={styles.textStyle}>
                        Enter your mobile number
                    </Text>
                    <Text style={styles.mobile}>
                        Mobile Number
                    </Text>
                    <PhoneInput
                        initialCountry = {'bd'}
                        autoFormat = {true}
                        onChangePhoneNumber = {this.setPhone}
                        textStyle = {{color: '#000', marginBottom: 10}}
                        flagStyle = {{ marginBottom: 10 }}
                        style = {styles.input}
                    />
                </View>
                <View style={styles.footer}>
                    <ArrowButton 
                        bgColor="#53b175" 
                        action={
                            () => this.PhoneSignIn(this.state.phone)
                        }
                    />
                </View>
            </ImageBackground>
        );
    }
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
    mobile: {
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
        flexDirection: 'row-reverse',
        paddingBottom: 50,
        paddingHorizontal: 20,
    }
})