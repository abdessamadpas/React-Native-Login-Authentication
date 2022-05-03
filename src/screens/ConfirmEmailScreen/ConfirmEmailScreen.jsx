import { View, Text,StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import React,{useState} from 'react'

const ConfirmEmailScreen = () => {
    
    const [codeConfirm, setCodeConfirm] = useState(null)
    const codeConfirming=()=>{
        console.warn('codeConfirming')
    }
    const resendCode=()=>{
        console.warn('resendCode')
    }
     const backToSignIn=()=>{
        console.warn('backToSignIn')
    }
  return (
      
    <View style={[styles.container]}>
        <Text style={styles.title}> Confirm email</Text>
        <CustomInput value= {codeConfirm} setValue= {setCodeConfirm} secureTextEntry= {false} placeholder= 'Username'/>
        <CustomButton text= "confirm" onPress= {codeConfirming}  type="PRIMARY"/>
        <CustomButton text= "resend code" onPress= {resendCode}  type="SECONDARY"/>
        <CustomButton text= "back to signIn" onPress= {backToSignIn}  type="TERTIARY"/>

    </View>
  )
}

export default ConfirmEmailScreen

const styles= StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:20,


    },
    title : {
        alignItems:'center',
        //width:400,
        
        fontSize:35,
        color:'grey',
    
        fontWeight: 'bold',
        marginVertical:50
    },
    text:{
        marginVertical:10,
        color:'black' ,
     }
  
}
)

