/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useRef } from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigation'
import HomeNavigator from './src/navigation/HomeNavigation'
import { NavigationContainer,useNavigationContainerRef, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();
import { useFlipper } from '@react-navigation/devtools';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  return (
    <NavigationContainer 
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current=navigationRef.getCurrentRoute().name
        console.log(routeNameRef.current,"routeNameRef.current")
      }}
      onStateChange={()=>{
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        console.log(currentRouteName,"currentRouteName")
        if(previousRouteName!==currentRouteName){
          //send the scree value analytics
        }
        routeNameRef.current=currentRouteName
        console.log(routeNameRef.current,"routeNameRef.current")
      }}
    >
      <AppStack.Navigator 
         screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}
           initialRouteName="Auth">
              <AppStack.Screen
                options={{
                   headerShown:false, 
                 }}  
                name="Auth" component={AuthNavigator} />
              <AppStack.Screen options={{headerShown:false}}  name="Home" component={HomeNavigator} />
       </AppStack.Navigator>
     </NavigationContainer> 
  );
};



export default App;
