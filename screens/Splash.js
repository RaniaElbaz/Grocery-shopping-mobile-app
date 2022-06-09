import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Animated,
    Easing,
} from 'react-native'
import auth from '@react-native-firebase/auth'

export class Splash extends React.Component{
  state = {
    animatedValue : new Animated.Value(0),
  }

  animate = () => {
    Animated.timing(
      this.state.animatedValue,
      {
      toValue: 1,
      duration: 3000,
      easing: Easing.ease,
      useNativeDriver: false,
      }
    ).start();
  };

  render(){
    const width = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })

    return (
      <View style={styles.container}>
          <Animated.View style={{width}}>
            <Image source={require("../assets/logo.png")} style={styles.logo}/>
          </Animated.View>
          <Text style={styles.textStyle}>
            online groceriet
          </Text>
      </View>
    );
  }

  componentDidMount(){
    this.animate();
    setTimeout(() => {
      auth().onAuthStateChanged((user) => {
        if(user){
          /*********/
        }
        else{
          this.props.navigation.navigate('OnBoarding')
        }
      })
    }, 3000); 
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#53b175",
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  logo: {
    width: '100%',
    height: 60,
    resizeMode:'contain',
  },
  textStyle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Questrial',
    marginTop: 30,
    letterSpacing: 7,
    marginLeft: 60,
  },

});