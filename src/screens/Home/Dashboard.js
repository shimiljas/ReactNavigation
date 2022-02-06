import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const Dashboard=()=>{
    return(
        <View style={style.container}>
            <Text style={{color:'white'}}>Dashboard</Text>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Dashboard