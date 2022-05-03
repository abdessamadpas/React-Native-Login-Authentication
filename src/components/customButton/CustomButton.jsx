import { StyleSheet, View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type, bgColor, ftColor}) => {
   
  return (
    <Pressable onPress={onPress} 
    style={[styles.container, 
        styles[`container_${type}`] ,
        bgColor  ? {backgroundColor:bgColor} : {}]
    }>
        <Text style={[styles.text , 
            styles[`text_${type}`],
            ftColor ? {color: ftColor}:{}
    ]} >{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
       
        width: '100%',
        alignItems: 'center',
        marginVertical:10,
        padding: 10,
        borderRadius: 10
    },
    container_PRIMARY:{
        backgroundColor:'#ffb259',
    },
    container_TERTIARY:{
      
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_TERTIARY: {
        color: 'grey'
    }
})