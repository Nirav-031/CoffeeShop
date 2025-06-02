import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '@screens/CartScreen/index'
import Payment from '@screens/CartScreen/paymentScreen';

const Stack = createNativeStackNavigator();
const CartScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Index} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
}

export default CartScreenStack

const styles = StyleSheet.create({})