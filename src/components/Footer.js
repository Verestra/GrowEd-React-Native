import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/Profile';
import ForYou from '../screens/Student/Dashboard/ForYou'
import Dashboard from '../screens/Student/Dashboard/Dashboard'
import Register from '../screens/Register';
import ResetPassword from '../screens/Reset-Password/ResetPassword';
import ResetPasswordNew from '../screens/Reset-Password/ResetPasswordNew'
import Chat from '../screens/Chats/Chat'
import Activity from '../screens/Student/Activity/Activity'
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
        name="ForYou"
        component={ForYou} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/img/activity-icon.png')} color={color} size={30} />
          ),
        }}
    />
      <Tab.Screen
        name="Chat"
        component={Chat}
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