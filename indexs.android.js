/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 16:06:11
 * @LastEditTime: 2019-08-14 10:54:07
 * @LastEditors: Please set LastEditors
 */

import React, { Component } from 'react';
import { 
  AppRegistry,
  Image, 
  FlatList, 
  StyleSheet, 
  Text, View ,
  Platform,
  Alert,
  TouchableOpacity,
  Dimensions} from "react-native";
  import {BoxShadow} from 'react-native-shadow';

var REQUEST_URL = "https://cqz-1256838880.cos.ap-shanghai.myqcloud.com/purchased.json";
var screenWidth =  Dimensions.get('window').width;
//android阴影
Shadow = props => {
  const {width, height} = props;
  return (
    <BoxShadow
      setting={{
        width: width,
        height: height,
        color: '#DEDEDE',
        border: 2,
        radius: 6,
        opacity: 0.5,
        x: 0,
        y: 0,
        style: {marginVertical: 0, justifyContent: 'center'},
      }}>
      {props.children}
    </BoxShadow>
  );
};
export default class CDPurchased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {

        let dataMutaArray = []
        
        for (let i = 0; i < responseData.data.goods_list.length; i++) {
          
          let item = responseData.data.goods_list[i]
          let sectionItem = {"class_token": item.class_token, "class_name": item.class_name}

          dataMutaArray.push(sectionItem)
          dataMutaArray = dataMutaArray.concat(item.album_list)
        }
        this.setState({
          data: dataMutaArray,
          loaded: true
        });
      });
  }

  render() {
    if (!this.state.loaded) {

      return this.renderLoadingView();
    }

    return (

      <FlatList
        data={this.state.data}
        renderItem={this.renderPurchased}        style={styles.list}
        keyExtractor={item => item.id}
      />
    );
  }


  
    
  // 空视图
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载中...</Text>
      </View>
    );
  }

  // 渲染购买数据
  renderPurchased({ item }) {

    if (item.class_name) {
      
      return (
        <View style={styles.section}>
          <Text style={styles.section_text}>{item.class_name}</Text>
        </View>
      )
    }

    return Platform.OS == 'android'? (
      <TouchableOpacity onPress={() => {
        Alert.alert(`${item.album_title}`);
      }}>
            <View style={styles.row}>
                  <View style={styles.corner}>
                  <Shadow width={screenWidth - 60} height={132}>
                  <View style={styles.android_corner}>
                  <Image source={{ uri: item.album_small_cover}} style={styles.corner_img}/>
                  <View style={styles.corner_right}>
                    <Text style={styles.corner_right_title}>{item.album_title}</Text>
                    <Text style={styles.corner_right_date}>{item.goods_time}</Text>
                    {hiddenProgress(item)}
                  </View>
                </View>
                </Shadow>
                </View>
             </View>
      </TouchableOpacity>
    ):(
     <TouchableOpacity onPress={() => {

            Alert.alert(`${item.album_title}`);
          }}>
     <View style={styles.row}>
                    <View style={styles.corner}>
                      <Image source={{ uri: item.album_small_cover}} style={styles.corner_img}/>
                      <View style={styles.corner_right}>
                        <Text style={styles.corner_right_title}>{item.album_title}</Text>
                        <Text style={styles.corner_right_date}>{item.goods_time}</Text>
                        {hiddenProgress(item)}
                      </View>
                    </View>
                 </View>
      </TouchableOpacity>
    );
  }
}

// 判断是否显示进度条
var hiddenProgress =  (item) => {
    
  if (item.album_total_num > 0) {
    return (
      <View style={styles.corner_right_bottom_view}>
        <Text style={[styles.corner_right_date, styles.corner_right_progress]}>{`学习进度 ${item.studied_count} / ${item.album_total_num}`}</Text>
        <View style={styles.corner_right_bottom_progressView}>
          <View style={[styles.corner_right_top_progress, {width: calculateProgress(item.studied_count, item.album_total_num)}]}></View>
        </View>
      </View>
    ) 
  }

  return null
}

// 计算进度条value
var calculateProgress = (count, total) => {

  let num = (count/total) * 100
  return `${num.toString()}%`;
}

/**************************样式 css***************************** */
var styles = StyleSheet.create({

  section: {
    backgroundColor: '#FFFFFF',
    height: 52,
    width: "100%",
    marginTop: 21
  },
  section_text: {
    fontSize: 18,
    textAlign: "left",
    paddingLeft: 16,
    height: 58,
    lineHeight: 58,
    fontFamily: "HYZhengYuan-GEW"
  },

  row: {
    backgroundColor:'#FFFFFF',
    width: '100%',
    height: 148,
  },
  android_corner: {
      borderRadius: 6,
      flex: 1,
      flexDirection: 'row',
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: '#FFFFFF'
  },
  corner: {

    borderRadius: 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    height: 132,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 6,
    marginBottom: 10,

    ...Platform.select({
      ios: {
        shadowColor: 'rgb(222,222,222)',
        shadowOffset: {h: 0, w: 0},
        shadowRadius: 6,
        shadowOpacity: 0.5
      },
      
      android: {

      }
    })
  },
  corner_img: {
    marginLeft: 16,
    width: 102,
    height: 102,
    borderRadius: 6
  },

  corner_right: {
    flex: 1,
    marginLeft: 16,
    height: '100%'
  },
  corner_right_title: {
    paddingTop: 23,
    color: '#333333',
    fontSize: 16,
    textAlign: "left",
    fontFamily: "HYZhengYuan-GEW"
  },
  corner_right_date: {
    paddingTop: 8,
    color: '#999999',
    fontSize: 13,
    textAlign: "left",
    fontFamily: "HYZhengYuan-FEW"
  },
  corner_right_progress: {
    paddingTop: 0
  },
  corner_right_bottom_view: {
    margin:0,
  },
  corner_right_bottom_progressView: {
    marginRight: 49,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#EDEDED',
    marginTop: 10
  },
  corner_right_top_progress: {
    height: '100%',
    backgroundColor: '#FF8820',
    borderRadius: 2.5
  }

});

import App2 from './js/testjs/FirstPage';
import SecondPage from './js/testjs/SecondPage';

AppRegistry.registerComponent('Hello_World2', () => App2);
AppRegistry.registerComponent('SecondPage', () => SecondPage);

AppRegistry.registerComponent('Hello_World', () => CDPurchased);
