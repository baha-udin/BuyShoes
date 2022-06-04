import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  Login,
  Register,
  Splash,
  Onboarding,
  Profile,
  Products,
  Orders,
  Detail,
  Description,
} from './../Pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainMenu = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="MainMenu">
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: ''}}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false, headerBackVisible: true}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
