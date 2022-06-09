import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    TouchableWithoutFeedbackBase,
} from 'react-native'
import PhoneInput from 'react-native-phone-input'
import auth from '@react-native-firebase/auth'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import { MainButton } from '../components/MainButton'


export class Signin extends Component{
  state = {
    phone : '',
  }

  googleSignIn= async () =>{
    try {
      await GoogleSignin.hasPlayServices();
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential)
      console.log('Login success')
    }catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        alert('no')
        // some other error happened
      }
    }
  }

  fbSignIn = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // this.props.navigation.navigate('Splash')
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require("../assets/bg2.png")}/>
        <View style={styles.fragment}>
          <Text style={styles.headline}>
            Get your groceries
          </Text>
          <Text style={styles.headline}>
            with nectar
          </Text>
          <Pressable onPress={()=>this.props.navigation.navigate('Number')} style = {styles.input}>
            <PhoneInput
              disabled = {true}
              textStyle = {{color: '#000'}}
              initialCountry = {'bd'}
              style = {{marginBottom: 10, fontSize: 18}}
            />
          </Pressable>
          <View style={styles.buttons}>
            <MainButton title='Login' action={()=> this.props.navigation.navigate('Login')}/>
            <Text style={styles.connect}>
              Or connect with social media
            </Text>
            <Pressable style={styles.googleButton} onPress={this.googleSignIn}>
              <Image source={require('../assets/google.png')} style={styles.signinLogo}/>
              <Text  style={styles.signinText}>
                Continue with Google
              </Text>
            </Pressable>
            <Pressable style={styles.fButton} onPress={this.fbSignIn}>
              <Image source={require('../assets/fb.png')} style={styles.signinLogo}/>
              <Text  style={styles.signinText}>
                Continue with Facebook
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
  
  componentDidMount(){
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: "48507943724-ag3acevc8q6rdck92gv7085n4ki1ahdl.apps.googleusercontent.com", 
      // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
    });
    auth().onAuthStateChanged((user) => {
      () => this.props.navigation.navigate('Shop')
    })
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
	},
  img: {
    flex: 1,
    resizeMode: 'contain',
  },
	fragment: {
    width: '100%',
	},
	headline: {
    color: '#030303',
    fontSize: 26,
    paddingHorizontal: '5%',
	},
  input: {
    marginHorizontal: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    marginTop: 30,
    alignItems: 'center',
  },
  buttons: {
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30,
    marginTop: 10,
  },
  connect: {
    color: '#828282',
    fontWeight: '600',
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#5383EC',
    width: '90%',
    height: 50,
    borderRadius: 13,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  fButton: {
    flexDirection: 'row',
    backgroundColor: '#4A66AC',
    width: '90%',
    height: 50,
    borderRadius: 13,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  signinText: {
    color: '#FCFCFC',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
  },
  signinLogo: {
    height: 25,
    resizeMode: 'contain',
  },

});