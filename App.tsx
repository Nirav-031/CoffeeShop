import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '@navigation/RootNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
