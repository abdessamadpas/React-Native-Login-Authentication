import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import Navigation from './src/navigation';

import  ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';



export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#F9FBFC'
 
  },
});
