import { View, Text,StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import React,{useState} from 'react'
import { useForm } from 'react-hook-form'

import { useNavigation } from '@react-navigation/native'


const ForgotPasswordScreen = () => {


    const [codeConfirm, setCodeConfirm] = useState("")
    const navigation = useNavigation()

    const codeConfirming=()=>{
        console.warn('codeConfirming')
    }
    const resendCode=()=>{
        console.warn('resendCode')
    }
     const backToSignIn=()=>{
        console.warn('backToSignIn')
        navigation.navigate("SignInScreen")

    }

    const {control, handleSubmit, formState: {errors}} = useForm()



  return (
    <View style={[styles.container]}>
        <Text style={styles.title}> Rest your password</Text>
        <CustomInput 
        name= "resr" 
        
        control={control}
        value= {codeConfirm} setValue= {setCodeConfirm} secureTextEntry= {false} placeholder= 'Username'/>
        <CustomButton text= "Send" onPress= {codeConfirming}  type="PRIMARY"/>
        <CustomButton text= "Back to signIn" onPress= {backToSignIn}  type="TERTIARY"/>
    </View>
  )
}

export default ForgotPasswordScreen


const styles= StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },
    title : {
        alignItems:'center',
        //width:400,
        
        fontSize:30,
        color:'#f7901a',
    
        fontWeight: 'bold',
        marginVertical:50
    },
    text:{
        marginVertical:10,
        color:'black' ,
     }
  
}
)

