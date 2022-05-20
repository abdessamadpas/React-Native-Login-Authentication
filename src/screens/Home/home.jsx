import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>  to the navigation   </Text>
      </View>
    </SafeAreaView>
   
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
    
  }
})  