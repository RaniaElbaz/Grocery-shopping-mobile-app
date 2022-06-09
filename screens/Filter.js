import React from 'react'
import { View, StyleSheet,Pressable, Text, FlatList, } from 'react-native'
import { Checkbox } from 'react-native-paper'
import CustomIcon from '../components/CustomIcons.js'
import { MainButton } from '../components/MainButton'

export class Filter extends React.Component{
    state = {
        checked : [],
            categories : [
                {
                    name : 'Eggs',
                    checked : false, 
                },
                {
                    name : 'Noodles & Patsa',
                    checked : false, 
                },
                {
                    name : 'Chips & Crisps',
                    checked : false, 
                },
                {
                    name : 'Fast Food',
                    checked : false, 
                },
            ],
            brands : [
                {
                    name : 'Individual Collection',
                    checked : false, 
                },
                {
                    name : 'Cocacola',
                    checked : false, 
                },
                {
                    name : 'Ifad',
                    checked : false, 
                },
                {
                    name : 'Kazi Farmas',
                    checked : false, 
                },
            ]
    }

    setChecked = (list, idx) => {
        let arr = list
        arr[idx].checked = !arr[idx].checked
        this.setState({
            list : arr
        })
        console.log(list)
    }

    setFilter = (list) => {
        let len = list.length
        for(let i=0;i<len;i++){
            if(list[i].checked){
                this.state.checked.push(list[i].name)
            }
        }
        console.log(this.state.checked)
    }

    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.header}>
                    <Pressable onPress={()=>this.props.navigation.navigate('Category')}>
                        <CustomIcon
                            name="close"
                            color={'#212121'}
                            size={16}
                        />
                    </Pressable>
                    <Text style={styles.h1}>
                        Filter
                    </Text>
                </View>
                <View style={styles.fragment}>
                    <View style={styles.content}>
                        <Text style={styles.h2}>
                            Categories
                        </Text>
                        <FlatList
                            style={{marginBottom: 20}}
                            data={this.state.categories}
                            renderItem={({ item, index }) => (
                                <View style={styles.row}>
                                    <Checkbox
                                        status = {item.checked ? 'checked' : 'unchecked'}
                                        color = '#53b175'
                                        uncheckedColor = '#4C4F4D'
                                        onPress = {() => {this.setChecked(this.state.categories,index)}}
                                    />
                                    <Text style={styles.label}>
                                        {item.name}
                                    </Text>
                                </View>
                            )}
                        />
                        <Text style={styles.h2}>
                            Brands
                        </Text>
                        <FlatList
                            style={{marginBottom: 20}}
                            data={this.state.brands}
                            renderItem={({ item, index }) => (
                                <View style={styles.row}>
                                    <Checkbox
                                        status = {item.checked ? 'checked' : 'unchecked'}
                                        color = '#53b175'
                                        uncheckedColor = '#4C4F4D'
                                        onPress = {() => {this.setChecked(this.state.brands,index)}}
                                    />
                                    <Text style={styles.label}>
                                        {item.name}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.btn}>
                        <MainButton
                            title = 'Apply Filter'
                            action = {() => { 
                                this.setFilter(this.state.categories)
                                this.setFilter(this.state.brands)
                                this.props.navigation.navigate('Category', {filteredItems : this.state.checked})
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    h1: {
        flex: 1,
        color: '#181725',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    fragment: {
        flex: 1,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: '#F2F3F2',
    },
    content: {
        padding: 20,
    },
    h2: {
        color: '#181725',
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 10,
    },
    row : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelChecked: {
        fontSize: 16,
        flex: 1,
    },
    btn: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
    }
})