import React from 'react';
import {View,Button,Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Home/Dashboard';

const HomeStack = createNativeStackNavigator();

const HomeNavigator=()=>{
    return(
        <HomeStack.Navigator 
           initialRouteName="Dashboard">
            <HomeStack.Screen options={{headerShown:false}}  name="Dashboard" component={Dashboard} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;