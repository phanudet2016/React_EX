import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { createMaterialTopTabNavigator  } from 'react-navigation'
import FirstScreen from './tabs/FirstScreen'
import SecondScreen from './tabs/SecondScreen'

var MainScreenNavigator = createMaterialTopTabNavigator(
  {
    Home: { screen: FirstScreen },
    Profile: { screen: SecondScreen }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor:'#1d99ea',
      inactiveTintColor: '#a0a0a0',
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        backgroundColor: '#1d99ea',
        //opacity: 0
      },
      labelStyle: {
        padding: 0,
        fontSize: 16
      },
      showIcon: true,
      showLabel: false
    }
  }
);

MainScreenNavigator.navigationOption = {
  title: 'Tab example'
}
export default MainScreenNavigator;

