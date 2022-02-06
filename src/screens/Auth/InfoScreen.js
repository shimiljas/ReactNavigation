import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const InfoScreen=({})=>{
    
    return(
        <View style={style.container}>
            <Text style={{color:'green'}}>ForgotPassword</Text>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default InfoScreen