import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './tabnavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
  return(
    <Drawer.Navigator screenOptions = {{headerShown:false}}>
    <Drawer.Screen name = 'Home' component = {TabNavigator}></Drawer.Screen>
    <Drawer.Screen name = 'Profile' component = {Profile}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;