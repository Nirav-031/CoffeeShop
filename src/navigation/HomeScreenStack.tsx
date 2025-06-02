import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/HomeScreen/index';
import DetailsScreen from '@screens/HomeScreen/detailsScreen';
const Stack = createNativeStackNavigator();
const HomeScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default HomeScreenStack

const styles = StyleSheet.create({})