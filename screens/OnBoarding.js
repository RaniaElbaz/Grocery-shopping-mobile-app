import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    StatusBar,
} from 'react-native';
import {MainButton} from '../components/MainButton';

export class OnBoarding extends Component{

  render(){
    return (
      <ImageBackground style={styles.bg} source={require("../assets/bg.png")}>
        
        <View style={styles.content}>
          <Image resizeMode={'contain'} style={styles.logo} source={require("../assets/carrot.png")}/>
          <Text style={styles.headline}>
            Welcome
          </Text>
          <Text style={styles.headline}>
            to our store
          </Text>
          <Text style={styles.textStyle}>
            Get your groceries in as fast as one hour
          </Text>
          <MainButton title='Get Started' bgColor="#53b175" action={() => {this.props.navigation.navigate('Signin')}}/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
	bg: {
		flex:1,
	},
	content: {
    flex:1,
      paddingBottom: '10%',
      alignItems:"center",
      justifyContent:"flex-end",
	},
	logo: {
		width:"20%",
		height:"10%",
		marginBottom: 20,
	},
	headline: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
	},
	textStyle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
	},

});