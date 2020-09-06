import React, { Component } from 'react';
import Assignment from './src/screen/Assignment/Assignment'
import { View ,LogBox} from 'react-native';


export default class App extends Component {
  render(){
  return (
    
    <View>
    <Assignment/>
    </View>
    
  );
}
};
LogBox.ignoreAllLogs();
