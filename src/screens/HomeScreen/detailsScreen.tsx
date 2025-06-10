import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@utils/GlobalStyle';

const detailsScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:COLORS.primaryBlackHex
    }}>
      <View style={{height:400,width:"100%",backgroundColor:"#fff"}}>

      </View>
    </ScrollView>
  );
}

export default detailsScreen

const styles = StyleSheet.create({})