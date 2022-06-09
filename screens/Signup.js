import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Pressable,
    Linking, 
} from 'react-native'
import {TextInput} from 'react-native-paper'
import auth from '@react-native-firebase/auth'
import {MainButton} from '../components/MainButton'

export class Signup extends Component{
    state = {
        txtUser: '',
        txtEmail: '',
        txtPass: '',
        passwordVisible: true,
    }

    setPasswordVisible = (pass) => {
        this.setState({
            passwordVisible: pass
        })
    }

    setUsername = (text) => {
        this.setState({
            txtUser : (text).trim(),
        })
    }

    setEmail=(text)=>{
        this.setState({
            txtEmail : (text).toLowerCase().trim(),
        })
    }
      
    setPass=(text)=>{
        this.setState({
            txtPass : text,
        })
    }

    handleSignup=()=>{
        if (this.state.txtEmail !== '' && this.state.txtPass !== '') {
            auth()
            .createUserWithEmailAndPassword(this.state.txtEmail, this.state.txtPass)
            .then(() => {
                console.log('Signup success')
                this.props.navigation.navigate('Locate')
            })
            .catch(err => console.log(`Signup err: ${err}`));
        }
    }

    render(){
        return(
            <ImageBackground source={require('../assets/bgcolor.png')} style={styles.bg}>
                <Image source={require('../assets/carroto.png')} style={styles.carrot}/>
                <View style={styles.fragment}>
                    <Text style={styles.textStyle}>
                        Sign Up
                    </Text>
                    <Text style={styles.txt}>
                        Enter your Credentials to continue
                    </Text>
                    <Text style={styles.label}>
                        Username
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText = {this.setUsername}
                        activeUnderlineColor = "#E2E2E2"
                    />
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <TextInput
                        placeholder='name@example.com'
                        style={styles.input}
                        onChangeText = {this.setEmail}
                        activeUnderlineColor = "#E2E2E2"
                    />
                    <Text style={styles.label}>
                        Password
                    </Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry= {this.state.passwordVisible}
                        right={
                            <TextInput.Icon 
                                name={this.state.passwordVisible ? "eye" : "eye-off"} 
                                onPress={() => this.setPasswordVisible(!this.state.passwordVisible)} 
                            />
                        }
                        onChangeText = {this.setPass}
                        activeUnderlineColor = "#E2E2E2"
                    />
                    <View style={styles.policy}>
                        <Text>
                            By continuing you agree to our
                        </Text>
                        <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>
                            Terms of Service
                        </Text>
                        <Text>
                            and 
                        </Text>
                        <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>
                            Privacy Policy.
                        </Text>
                    </View>
                    <View style={styles.centered}>
                        <MainButton 
                            bgColor="#53b175" 
                            title = 'Sign Up'
                            action={this.handleSignup}
                        />
                        <Pressable style={styles.signuprow} onPress={() => {this.props.navigation.navigate('Login')}}>
                            <Text style={styles.acc}>
                                Already have an account? 
                            </Text>    
                            <Text style={styles.signup}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    carrot: {
        width: '20%',
        resizeMode: 'contain',
        marginBottom: 30,
    },
    fragment: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    textStyle: {
        color: '#181725',
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 5,
    },
    txt: {
        color: '#7C7C7C',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 50,
    },
    label: {
        width: '100%',
        color: '#7C7C7C',
        fontSize: 16,
        fontWeight: '600',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        marginBottom: 20,
        color: '#000',
        backgroundColor: 'transparent',
        height: 40,
    },
    policy: {
        flexDirection: 'row',
        fontSize: 14,
        color: '#181725',
        marginBottom: 20,
        flexWrap: 'wrap',
    },
    link: {
        color: '#53B175',
        marginHorizontal: 2,
    },
    centered: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signuprow: {
        flexDirection: 'row',
        marginTop: 20,
    },
    acc: {
        color: '#181725',
        fontSize: 14,
        fontWeight: '500',
    },
    signup: {
        color: '#53B175',
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '500',
    }
})