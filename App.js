import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import CustomIcon from './components/CustomIcons.js'

/* Auth imports */
import {Splash} from './screens/Splash'
import {OnBoarding} from './screens/OnBoarding'
import {Signin} from './screens/Signin'
import {Number} from './screens/Number'
import {Verify} from './screens/Verification'
import {Login} from './screens/Login'
import {Signup} from './screens/Signup'
/* Tab imports */
import {Home} from './screens/Home'
import {Explore} from './screens/Explore'
import {Account} from './screens/Account'
import {Fav} from './screens/Favourite'
import {Cart} from './screens/Cart'
/* rest of imports */
import {Locate} from './screens/Location'
import {Order} from './screens/Order'
import {Detail} from './screens/Detail'
import {Category} from './screens/Category'
import {Search} from './screens/Search'
import {Filter} from './screens/Filter'
import {Map} from './screens/Map.js'

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AuthStack = ({route}) => {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen 
        name='Splash' 
        component={Splash}/>
      <Stack.Screen 
        name='OnBoarding' 
        component={OnBoarding}/>
      <Stack.Screen 
        name='Signin' 
        component={Signin}/>
      <Stack.Screen 
					name='Number' 
					component={Number}/>
      <Stack.Screen 
        name='Verify' 
        component={Verify}/>
      <Stack.Screen 
        name='Login' 
        component={Login}/>
      <Stack.Screen 
        name='Signup' 
        component={Signup}/>
    </Stack.Navigator>
  );
}

const  Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      backBehavior= 'history'
      activeColor="#53B175"
      inactiveColor="#181725"
      shifting = {false}
      barStyle = {{ backgroundColor: '#fff', marginTop: 5 }}
    >
      <Tab.Screen 
        name="Shop" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name='store' size={16}  color={color}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={Search} 
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name='explore' size={16} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name='cart' size={16} color={color}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Favourite" 
        component={Fav} 
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name='heart' size={16} color={color}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={Account} 
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name='account' size={16} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AllStack = ({route}) => {
  return (
    <Stack.Navigator
      initialRouteName='Tabs'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Tabs'
        component={Tabs}/>
      <Stack.Screen 
        name='Locate' 
        component={Locate}/>
      <Stack.Screen 
        name='Order' 
        component={Order}/>
      <Stack.Screen 
        name='Detail' 
        component={Detail}/>
      <Stack.Screen 
        name='Category' 
        component={Category}/>
      <Stack.Screen 
        name='Search' 
        component={Explore}/>
      <Stack.Screen 
        name='Filter' 
        component={Filter}/>
      <Stack.Screen 
        name='Map' 
        component={Map}/>
    </Stack.Navigator>
  );
}

export default function  App () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      //console.log(user)
      setUser(user)
    })
  })

  return (
    <NavigationContainer>
      {
        user ?
          <AllStack/>
        :
          <AuthStack/>
      }
    </NavigationContainer>
  );
}