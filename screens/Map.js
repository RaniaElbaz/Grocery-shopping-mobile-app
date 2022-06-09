import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import MapView, {Marker} from 'react-native-maps'

export class Map extends React.Component{
    state={
        coord : [{
            latitude: 31,
            longitude: 31,
            },
            {
                latitude: 31,
                longitude: 31.5,
            }]
    }

    render(){
        return (
            <View style={styles.container}>
               <View style={styles.content}>
                   <Text style={styles.text}>
                       Your Order on its Way
                   </Text>
               </View>
               <MapView
                   style={styles.map}
                   showsUserLocation = {true}
                   followsUserLocation = {true}
                   camera = {{
                    center: {
                        latitude: 31,
                        longitude: 31,
                    },
                      pitch: 1,
                      heading: 10,
                      zoom: 15,
                      altitude: 20,
                   }}>
                       <Marker
                            coordinate={this.state.coord[0]}
                       />
                       <Marker
                            coordinate={this.state.coord[1]}
                       />
               </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    text: {
        marginVertical:17,
        fontSize: 19,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        color : 'black',
    },
    content: {
        paddingHorizontal: 35,
        alignItems: 'center',
    },
    map: {
        flex: 1,
    }
});