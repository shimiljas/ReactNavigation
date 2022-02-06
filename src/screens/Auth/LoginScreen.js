import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native'

const LoginScreen=({navigation})=>{
    const data={
        itemId:38,
        productName:'bag',
        email:"something@gmail.com"
    }
    return(
        <View style={style.container}>
            <Text style={{color:'white',marginBottom:30}}>LoginScreen</Text>
            <Text style={{color:'white',marginBottom:30}}>{data.itemId}</Text>
            <Text style={{color:'white',marginBottom:30}}>{data.productName}</Text>
            <Button title="Forgot" onPress={()=>navigation.navigate('Forgot',
            {
                email:data.email
            }
            )}></Button>
            <View style={{height:40}}/>
            <Button title="Signup" onPress={()=>navigation.navigate('Signup',
            {
                email:data.email,
                title:"Create new acccount"
            }
            )}></Button>

         <View style={{height:40}}/>
         <Button title="Home" onPress={()=>navigation.navigate('Home')}></Button>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default LoginScreen