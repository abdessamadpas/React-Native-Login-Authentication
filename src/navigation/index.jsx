import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfirmEmailScreen from '../src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../src/screens/NewPasswordScreen/NewPasswordScreen';
import SignInScreen from '../src/screens/SignInScreen/SignInScreen';
import SignUpScreen from '../src/screens/SingUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name="SignIn" component={SignInScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation