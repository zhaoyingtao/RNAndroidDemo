
//一
//import React,{Component} from 'react';
//import {
// AppRegistry,View,Text,
//} from 'react-native';

//class App extends Component{
// //...其他方法
// render(){
//  return(
//   <View>
//    <Text>第一个混合RNapp  OK</Text>
//   </View>
//  );
// }
//  //...其他方法
//}
//AppRegistry.registerComponent('Hello', () => App);
//
//class App2 extends Component{
// //...其他方法
// render(){
//  return(
//   <View>
//    <Text>第一个混合</Text>
//   </View>
//  );
// }
//  //...其他方法
//}
//AppRegistry.registerComponent('Hello_World', () => App2);
//
//
//import  FirstPage from './js/testjs/FirstPage';
//AppRegistry.registerComponent('Hello_World2', () => FirstPage);

//二
import { AppRegistry } from 'react-native';
import App from './App';
import App2 from './js/testjs/FirstPage';
import SecondPage from './js/testjs/SecondPage';

AppRegistry.registerComponent('Hello_World2', () => App2);
AppRegistry.registerComponent('SecondPage', () => SecondPage);





//import React from "react";
//import { View, Text } from "react-native";
//import { createStackNavigator, createAppContainer } from "react-navigation";
//
//class HomeScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//        <Text>Home Screen</Text>
//      </View>
//    );
//  }
//}
//
//const AppNavigator = createStackNavigator({
//  Home: {
//    screen: HomeScreen
//  }
//});
//const App = createAppContainer(AppNavigator);
////export default createAppContainer(AppNavigator);
//
//AppRegistry.registerComponent('Hello World', () => App);