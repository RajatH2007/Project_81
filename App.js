import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './Navigation/drawernavigator';

export default function App(){
  return(
    <NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
  )
}