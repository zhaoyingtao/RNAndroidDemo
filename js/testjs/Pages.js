//import React,{Component} from 'react';
//
//import  FirstPage from './FirstPage';
//import  SecondPage from './SecondPage';
//import  ThirdPage from './ThirdPage';
//import  FourthPage from './FourthPage';
//
//import {StackNavigator } from 'react-navigation';
//
//export default class Pages extends Component{
//
//    render(){
//        return(
//            <SimpleAppNavigator/>
//        )
//    }
//}
//
//const SimpleAppNavigator = StackNavigator({
//    page1:{screen: FirstPage},
//    page2:{screen: SecondPage},
//    page3:{screen: ThirdPage},
//    page4:{screen: FourthPage}
//},{
//    initialRouteName:'page1'
//});






import React,{Component} from 'react';

import  FirstPage from './FirstPage';
import  SecondPage from './SecondPage';
import  ThirdPage from './ThirdPage';
import  FourthPage from './FourthPage';

import {createStackNavigator,createAppContainer } from 'react-navigation';

export default class Pages extends Component{

    render(){
        return createAppContainer(AppRoot)
    }
}
const AppRoot = createStackNavigator({
            page1:{screen: FirstPage},
            page2:{screen: SecondPage},
            page3:{screen: ThirdPage},
            page4:{screen: FourthPage}
        },{
            initialRouteName:'page1'
        }
);
const SimpleAppNavigator = StackNavigator({
    page1:{screen: FirstPage},
    page2:{screen: SecondPage},
    page3:{screen: ThirdPage},
    page4:{screen: FourthPage}
},{
    initialRouteName:'page1'
});






//
//import React from 'react';
//import {
//  AppRegistry,
//  Text,
//  View,
//  Button
//} from 'react-native';
//import { StackNavigator } from 'react-navigation';
//
// class HomeScreen extends React.Component {
//  static navigationOptions = {
//    title: 'Welcome',
//  };
//  render() {
//    const { navigate } = this.props.navigation;
//    return (
//      <View>
//        <Text>Hello, Chat App!</Text>
//        <Button
//          onPress={() => navigate('Chat', { user: 'Lucy' })}
//          title="Chat with Lucy"
//        />
//      </View>
//    );
//  }
//}
//
// class ChatScreen extends React.Component {
//  // Nav options can be defined as a function of the screen's props:
//  static navigationOptions = ({ navigation }) => ({
//    title: `Chat with ${navigation.state.params.user}`,
//  });
//  render() {
//    // The screen's current route is passed in to `props.navigation.state`:
//    const { params } = this.props.navigation.state;
//    return (
//      <View>
//        <Text>Chat with {params.user}</Text>
//      </View>
//    );
//  }
//}
//
//const  SimpleAppNavigator = StackNavigator({
//  Home: { screen: HomeScreen },
//  Chat: { screen: ChatScreen }
//});
//
//const AppNavigation = () => (
//  <SimpleAppNavigator  />
//);
//
//export default class App extends React.Component {
//  render() {
//    return (
//        <AppNavigation/>
//    );
//  }
//}