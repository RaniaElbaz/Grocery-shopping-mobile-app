import React from 'react';
import{
    Image,
    StyleSheet,
    Pressable,
}from 'react-native';

export class ArrowButton extends React.Component{
    render(){
        return (
            <Pressable backgroundColor={this.props.bgColor} style={styles.buttonStyle} onPress={this.props.action}>
                <Image source={require('../assets/arrow.png')} style={styles.arrow}/>
            </Pressable>
        );
    }
}
 
const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
    },
    arrow: {
        width: '20%',
        resizeMode: 'contain',
    },
});