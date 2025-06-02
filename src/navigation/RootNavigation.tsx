import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartScreenStack from '@navigation/CartScreenStack';
import FavoriteScreenStack from '@navigation/FavoriteScreenStack';
import HistoryScreenStack from '@navigation/HistoryScreenStack';
import HomeScreenStack from '@navigation/HomeScreenStack';
import {COLORS, FONTFAMILY, FONTSIZE} from '@utils/GlobalStyle';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();
const RootNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: FONTFAMILY.poppins_bold,
          fontSize: FONTSIZE.size_14,
          marginBottom: 0,
        },
        tabBarStyle: {
          height: 70,
          paddingVertical: 20,
          backgroundColor: COLORS.primaryBlackHex,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarActiveTintColor: COLORS.primaryOrangeHex,
        tabBarInactiveTintColor: COLORS.primaryGreyHex,
        tabBarLabelPosition: 'below-icon',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Octicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreenStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Entypo
              name="shopping-cart"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreenStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Octicons name="heart" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreenStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Octicons name="history" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
