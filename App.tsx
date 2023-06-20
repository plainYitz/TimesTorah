import React from 'react';
import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { config } from './config';
import Home from './screens/home';
import LoginScreen from './screens/login';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens/profile';
import Init from './screens/init';
// import {  } from "@react-navigation/bottom-tabs"

const Stack = createNativeStackNavigator()
// const Tab = createNativeTabNavigator()

export default function App() {
  return (
  <NavigationContainer theme={{ dark: true, colors: {background: "black", border: "transparent", card: "#333", notification: "blue", primary: "black", text: "white" } }} >
    <Stack.Navigator initialRouteName='Init' screenOptions={{ animation: 'slide_from_right', navigationBarHidden: true }} >
      <Stack.Screen name='Init' component={Init} options={{ animation: 'flip', headerShown: false }}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>

    {/* <View style={{ position:  "absolute", backgroundColor: "black", flexGrow: 0, alignItems: 'stretch', gap: 10 }} > */}
      <StatusBar backgroundColor={config.theme.brown} barStyle={'default'} translucent={ true } networkActivityIndicatorVisible={true} ></StatusBar>
      {/* <StatusBarExpo style="auto" /> */}
    {/* </View> */}
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
