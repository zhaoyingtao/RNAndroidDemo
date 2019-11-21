
//import React, {Component} from 'react';
//
//import Pages from "./js/testjs/Pages";
//
//
//type Props = {};
//
//export default class App extends Component<Props> {
//    render() {
//        return (
//            <Pages />
//        )
//    }
//}
//AppRegistry.registerComponent('Hello World', () => App);






import React, {Component} from 'react';
import {
 View,Text
} from 'react-native';
export default class App2 extends Component{
 //...其他方法
 render(){
  return(
   <View style= {{ flex: 1, alignItems: "center", justifyContent: "center"}}>
    <Text>第一个混合RN页面</Text>
   </View>
  );
 }
  //...其他方法
}
