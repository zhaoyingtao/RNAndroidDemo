import React, {Component} from 'react'

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

export default class FourthPage extends Component<Props> {
    static navigationOptions = {
        title: 'page 4',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> This is Fourth Page!</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.goBack()
                }}>
                    <Text style={styles.textView}>
                        Touch me to go back!
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigate('page1')
                }}>
                    <Text style={styles.textView}>Go to First page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigate('page3')
                }}>
                    <Text style={styles.textView}>Go to Third page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigate('page2')
                }}>
                    <Text style={styles.textView}>Go to Second page</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textView: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: 'red'
    }
})