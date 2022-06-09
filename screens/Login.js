import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Pressable,
} from 'react-native'
import {TextInput} from 'react-native-paper'
import auth from '@react-native-firebase/auth'
import {MainButton} from '../components/MainButton'

export class Login extends Component{
    state = {
        txtEmail: '',
        txtPass: '',
        passwordVisible: true,
    }

    setPasswordVisible = (pass) => {
        this.setState({
            passwordVisible: pass
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
  
    handleLogin = () => {
        if (this.state.txtEmail !== '' && this.state.txtPass !== '') {
          auth()
            .signInWithEmailAndPassword( this.state.txtEmail, this.state.txtPass)
            .then(() => {
                console.log('Login success')
            })
            .catch(err => console.log(`Login err: ${err}`));
        }
    };

    render(){
        return(
            <ImageBackground source={require('../assets/bgcolor.png')} style={styles.bg}>
                <Image source={require('../assets/carroto.png')} style={styles.carrot}/>
                <View style={styles.fragment}>
                    <Text style={styles.textStyle}>
                        Loging
                    </Text>
                    <Text style={styles.txt}>
                        Enter your emails annd password
                    </Text>
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
                                name = {this.state.passwordVisible ? "eye" : "eye-off"} 
                                onPress = {() => this.setPasswordVisible(!this.state.passwordVisible)} 
                            />
                        }
                        onChangeText = {this.setPass}
                        activeUnderlineColor = "#E2E2E2"
                    />
                    <Text style={styles.pass}>
                        Forgot Password?
                    </Text>
                    <View style={styles.centered}>
                        <MainButton 
                            bgColor="#53b175" 
                            title = 'Log In'
                            action={this.handleLogin}
                        />
                        <Pressable style={styles.signuprow} onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={styles.acc}>
                                Don't have an account? 
                            </Text>    
                            <Text style={styles.signup}>
                                Signup
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
    pass: {
        fontSize: 14,
        color: '#181725',
        textAlign: 'right',
        marginBottom: 20,
    },
    centered: {
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