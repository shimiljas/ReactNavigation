import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const ForgotPassword=({route})=>{
    console.log(route.params,"ForgotPassword")
    return(
        <View style={style.container}>
            <Text style={{color:'green'}}>ForgotPassword</Text>
            <Text style={{color:'green'}}>{route.params?route.params.email:''}</Text>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default ForgotPassword