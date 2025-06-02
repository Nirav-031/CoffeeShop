import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '@screens/HistoryScreen/index'
const Stack = createNativeStackNavigator();
const HistoryScreenStack = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name='Index' component={Index}/>
    </Stack.Navigator>
    )
    
}

export default HistoryScreenStack

const styles = StyleSheet.create({})