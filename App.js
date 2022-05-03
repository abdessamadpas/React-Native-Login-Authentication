import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
 
  },
});
