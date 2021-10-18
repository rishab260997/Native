import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashhboard from './Pages/Dashborad';

const Stack = createStackNavigator();
const Routes = () => {
    console.log("Routes")
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashhboard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
