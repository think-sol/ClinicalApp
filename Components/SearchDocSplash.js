import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text>Doc</Text>
                </View>
                <View style={styles.footer}>
                    <Button></Button>
                </View>
               

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        justifyContent:'center',
        alignItems:'center',
        width:wp('100%'),
        height:hp('70%'),
    },
    footer:{
        justifyContent:'center',
        alignItems:'center',
        width:wp('100%'),
        height:hp('30%')
    }
})
