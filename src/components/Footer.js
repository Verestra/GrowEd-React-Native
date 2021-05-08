import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import ResetPassword from '../screens/Reset-Password/ResetPassword';
import ResetPasswordNew from '../screens/Reset-Password/ResetPasswordNew'
const Tab = createBottomTabNavigator();

function FooterTab() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: '#5784BA',
      }}
    >
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="ResetPasswordNew"
        component={ResetPasswordNew}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat-processing" color={color} size={30} />
          ),
        }}
    />
      <Tab.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat-processing" color={color} size={30} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default FooterTab