import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const CustomInput = ({value, setValue, placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      onCangeText={setValue}
      secureTextEntry= {secureTextEntry}
       placeholder={placeholder}
       style={styles.input}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor:'white',
        borderColor:'#e8e8e8',
        borderRadius:5,
        borderWidth: 1,
        paddingHorizontal:  10,
        marginVertical: 10
        
    },
    input: {

    }
})