import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


const SignupScreen=({})=>{
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route.params,"SignupScreen")
    return(
        <View style={style.container}>
            <Text style={{color:'white',marginBottom:20}}>SignupScreen</Text>
            <Text style={{color:'white',marginBottom:20}}>{route.params?route.params.email:''}</Text>

            <Button title="Goto Login" onPress={()=>navigation.goBack()}></Button>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default SignupScreen