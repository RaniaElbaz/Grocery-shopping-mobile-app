import React from 'react';
import
    {Text,
    StyleSheet,
    Pressable}
from 'react-native';

export class MainButton extends React.Component{
    render(){
        return (
            <Pressable backgroundColor={this.props.bgColor} style={styles.buttonStyle} onPress={this.props.action}>
                <Text style={styles.buttonFont}>
                    {this.props.title}
                </Text>
            </Pressable>
        );
    }
}
 
const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        width: '90%',
        height: 50,
        borderRadius: 13,
        backgroundColor: '#53b175'
    },
    buttonFont: {
        fontSize: 18,
        color: '#FFF9FF',
        textAlign: 'center',
    },
});