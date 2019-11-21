import React from 'react';
import {View, Text, Button, NativeModules,DeviceEventEmitter} from 'react-native';

var nativeModule = NativeModules.OpenNativeModule;



export default class HomeScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>首页</Text>
        <Button title={'跳转到原生页面'} onPress={() => {
          this.jumpToNativeView();
        }}/>
      </View>
    )
  }

  jumpToNativeView() {
   //调用原生openNativeVC执行原生操作===成功
   // nativeModule.openNativeVC(1);

    //通过Callbacks的方式获取原生传的值===成功
//    nativeModule.measureLayout(
//                       (msg) => {
//                       alert(msg);
//                         console.log(msg);
//                       },
//                       (x, y, width, height) => {
//                       alert(x + ':' + y + ':' + width + ':' + height);
//                         console.log(x + ':' + y + ':' + width + ':' + height);
//                       });

//通过Promises的方式由原生向RN传值===成功
      nativeModule.measureLayoutPro().then(e=>{
         console.log(e.relativeX + ':' + e.relativeY + ':' + e.width + ':' + e.height);
         alert("Promises"+ e.relativeX + ':' + e.relativeY + ':' + e.width + ':' + e.height);
         this.setState({
           relativeX:e.relativeX,
           relativeY:e.relativeY,
           width:e.width,
           height:e.height,
         })
       }).catch(error=>{
        alert("Promises"+msg);
         console.log(error);
       });
  }
  //通过发送事件的方式由原生向RN传值
  componentWillMount(){
      DeviceEventEmitter.addListener('EventName_Async', this.onEvent_Async);
    }

  onEvent_Async = (e) => {
      alert(JSON.stringify(e));
  }
  //销毁阶段
  componentWillUnMount(){
      //移除监听
      DeviceEventEmitter.removeListener('EventName_Async',null);
  }
}