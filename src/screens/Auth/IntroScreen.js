import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native'

const IntroScreen=({ navigation })=>{
    return(
        <View style={style.container}>
            <Text style={{color:'white',marginBottom:20}}>IntroScreen</Text>
             <Button title="Goto Login" onPress={()=>navigation.navigate('Login')}></Button>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default IntroScreen