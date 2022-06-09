import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Pressable,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SelectDropdown from 'react-native-select-dropdown'
import {MainButton} from '../components/MainButton'

export class Locate extends Component{
    state = {
        zone : ["Egypt", "Canada", "Australia", "Ireland"],
        area : ["Cairo", "Alex", "Mansoura", "Giza"],
        txtzone: '',
        txtarea: '',
    }

    storeData = async () => {
      try {
        await AsyncStorage.setItem('zone', (this.state.txtzone))
        await AsyncStorage.setItem('area', (this.state.txtarea))
        this.props.navigation.navigate('Shop')
      } catch (e) {
        //saving error
        console.log('store error')
      }
    }

    render(){
        return(
            <ImageBackground source={require('../assets/bgcolor.png')} style={styles.bg}>
                <View style={styles.header}>
                    <Pressable onPress={()=> this.props.navigation.navigate('Tabs')}>
                        <Image source={require('../assets/arrowb.png')} style={styles.back}/>
                    </Pressable>
                </View>
                <View style={styles.fragment}>
                    <Image source={require('../assets/map.png')} style={styles.map}/>
                    <Text style={styles.textStyle}>
                        Select Your Location
                    </Text>
                    <Text style={styles.txt}>
                        Swithch on your location to stay in tune with what’s happening in your area
                    </Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.input}>
                        <Text style={styles.label}>
                            Your zone
                        </Text>
                        <SelectDropdown
                            data={this.state.zone}
                            onSelect={(selectedItem, index) => {}}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                this.state.txtzone = selectedItem
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            defaultButtonText = 'select your zone'
                            buttonStyle = {styles.dropdown}
                            buttonTextStyle = {styles.dropdownTxt}
                            renderDropdownIcon={(isOpened) => {
                                return (
                                  <Image
                                    source={require('../assets/chevron.png')}
                                    style = {styles.chevron}
                                  />
                                );
                              }}
                            dropdownIconPosition={"right"}  
                        />
                        <Text style={styles.label}>
                            your area
                        </Text>
                        <SelectDropdown
                            data={this.state.area}
                            onSelect={(selectedItem, index) => {}}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                this.state.txtarea = selectedItem
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            defaultButtonText = 'select your area'
                            buttonStyle = {styles.dropdown}
                            buttonTextStyle = {styles.dropdownTxt}
                            renderDropdownIcon={() => {
                                return (
                                  <Image
                                    source={require('../assets/chevron.png')}
                                    style = {styles.chevron}
                                  />
                                );
                              }}
                            dropdownIconPosition={"right"}  
                        />
                    </View>
                    <MainButton 
                        bgColor="#53b175" 
                        title = 'Submit'
                        action={this.storeData}
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        height: 200,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    textStyle: {
        color: '#181725',
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 10,
    },
    txt: {
        color: '#7C7C7C',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50, 
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    },
    label: {
        width: '100%',
        color: '#7C7C7C',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        marginLeft: 20,
    },
    dropdown: {
        width: '100%', 
        height: 40,
        marginBottom: 30,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },
    dropdownTxt: {
        textAlign: 'left',
        fontSize: 18,
    },
    chevron: {
        width: 15,
        resizeMode: 'contain'
    }
})