import React from 'react';
import{
    Image,
    StyleSheet,
    Pressable,
}from 'react-native';

export class AddButton extends React.Component{
    render(){
        return (
            <Pressable backgroundColor={this.props.bgColor} style={styles.buttonStyle} onPress={this.props.action}>
                <Image source={require('../assets/add.png')} style={styles.add}/>
            </Pressable>
        );
    }
}
 
const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: '#53b175'
    },
    add: {
        width: '40%',
        resizeMode: 'contain',
    },
});