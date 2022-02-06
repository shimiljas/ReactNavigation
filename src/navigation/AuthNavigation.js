import React from 'react';
import {View,Button,Text} from 'react-native'
import LoginScreen from '../screens/Auth/LoginScreen';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import SignupScreen from '../screens/Auth/SignupScreen';
import IntroScreen from '../screens/Auth/IntroScreen';
import { useNavigation } from '@react-navigation/native';
import InfoScreen from '../screens/Auth/InfoScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

const AuthNavigator=()=>{
    const navigation = useNavigation();
    return(
        <Stack.Navigator 
           initialRouteName="Intro">
            <Stack.Group>
            <Stack.Screen options={{headerShown:false}}  name="Intro" component={IntroScreen} />
            <Stack.Screen
              options={{ 
                title:'Login Screen',
                headerTitleAlign:'center',
                headerStyle: {
                     backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                      
                      color:'white'
                  },
                headerRight: () => (
                    <Button
                      onPress={() => navigation.navigate('Info')}
                      title="Info"
                      color="green"
                    />
                  ),
                headerLeft: () => (
                    <Button
                      onPress={() => navigation.goBack()}
                      title="Back"
                      color="green"
                    />
                   ),
                }}
            
                 name="Login"
                 component={LoginScreen} />
                 <Stack.Screen
                  name="Signup" 
                  component={SignupScreen}
                  options={({route})=>({ title: route.params.title })}
                 />
                 <Stack.Screen name="Forgot" component={ForgotPassword} />
             </Stack.Group>
             <Stack.Group screenOptions={{ presentation: 'modal' }}>
               <Stack.Screen name="Info" component={InfoScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default AuthNavigator


