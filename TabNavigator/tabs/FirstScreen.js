import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    // tabBarLable: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="md-home" size={25} color={tintColor}/>
    )
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>
          Tab 1
        </Text>
      </View>
    );
  }
}

