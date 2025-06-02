import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from '@screens/FavoriteScreen/index'

const Stack = createNativeStackNavigator();

const FavoriteScreenStack = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name='Favorite' component={Favorite}/>
    </Stack.Navigator>
  )
}

export default FavoriteScreenStack

const styles = StyleSheet.create({})