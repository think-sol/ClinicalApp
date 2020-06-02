import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SplashScreen extends Component {


    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('SearchDocSplash');
        },5000)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text>SplashScreen</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={{fontWeight:'bold'}}>Design by: Thinksolutionz</Text>
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
        height:hp('90%'),
    },
    footer:{
        justifyContent:'center',
        alignItems:'center',
        width:wp('100%'),
        height:hp('10%')
    }
})
