import React, {Component} from 'react';
import {
 View,Text
} from 'react-native';

export default class App extends Component{
 //...其他方法
 render(){
 var  initProps = this.props.bundle;
// var data = initProps.data;
  return(
   <View style= {{ flex: 1, alignItems: "center", justifyContent: "center"}}>
    <Text>RN页面==== + {initProps}</Text>
   </View>
  );
 }
  //...其他方法
}