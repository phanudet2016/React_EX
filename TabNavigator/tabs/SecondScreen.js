import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    // tabBarLable: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-aperture" size={25} color={tintColor}/>
    )
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>
          Tab 2
        </Text>
      </View>
    );
  }
}

