import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { Controller } from 'react-hook-form'

const CustomInput = ({name,control, required, placeholder,secureTextEntry}) => {
  
  return (
   
    
      <Controller
        control={control}
        name={name}
        rules={required}
        render={({field:{onChange, onBlur, value},fieldState: {error}} )=>(
          <>
          <View style={[styles.container, {borderColor : error ? 'red' : 'blue' }]}>
            <TextInput 
            value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry= {secureTextEntry}
              placeholder={placeholder}
              style={[styles.input]}
            />
          </View>
          {error && <Text>{error.message || 'error bitch'}</Text> } 
          </>
       )} 
      />
      
  

 
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 40,
        backgroundColor:'white',
        borderColor:'#e8e8e8',
        borderRadius:10,
        borderWidth: 1,
        paddingHorizontal:  10,
        marginVertical: 5,
        justifyContent: 'center'
        
    },
    input: {
        fontSize: 17
    }
})