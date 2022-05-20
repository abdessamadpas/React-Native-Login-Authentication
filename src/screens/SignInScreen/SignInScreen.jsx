import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import {authentification} from '../../../firebase/firebase-config'
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs } from 'firebase/firestore/lite';


//firebase 
import { createUserWithEmailAndPassword,  } from 'firebase/auth'
const SignInScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // firebase 
   
    const {control, handleSubmit, formState: {errors}} = useForm()
  //  console.log(errors);
    const {height} = useWindowDimensions()
    const navigation = useNavigation()

    const handleSubmi=()=>{
        
        createUserWithEmailAndPassword(authentification, email, password)
        .then(res=> {
            console.log(res);
        })
        .catch((error)=> console.log(error.message))
    }
    
    const forgetPassword=()=>{
       // console.warn('forgetPassword')
       navigation.navigate("ForgotPasswordScreen")
    }
    const facebook=()=>{
        console.warn('facebook')
    }
    const google=()=>{
        console.warn('google')
    }
    const apple=()=>{
        console.warn('apple')
    }
    const singup=()=>{
        //console.warn('singup')
        navigation.navigate("SignUpScreen")
    }

    
  return (
    <ScrollView showsVerticalScrollIndicator= {false}> 
        <View style={styles.root}>
            <Image source={require('../../../assets/images/logo-dev.png')}
                style={[styles.logo, {resizeMode: 'contain', height: height*0.9}]} />

            <CustomInput 
                name="email"
                secureTextEntry= {false}
                placeholder= 'email'
                control={control}
                required={{required:'email require',
                 minLength:{
                     value:5,
                    message:'more than 5 caracters'
                }}}
             />
            <CustomInput 
                name= "passsword" 
                secureTextEntry= {true} 
                placeholder= 'Password'
                control={control}
                required={{
                    required: 'password require',
                    minLength:{
                        value: 4,
                        message: 'you more than 4'
                    },
                    minLength:{
                        value: 4,
                        message: 'you more than 4'
                    }
                }}
            />

            <CustomButton text= "SignIn" onPress= { handleSubmit(handleSubmi)}  type="PRIMARY"/>
            <CustomButton text= "ForgetPassword" onPress= {forgetPassword}  type="TERTIARY"/>
            <CustomButton text= "Sign In With Facebook" onPress= {facebook}  type="PRIMARY" bgColor="#E7EAF4" ftColor="#4765A9"/>
            <CustomButton text= "Sign In With Google" onPress= {google}  type="PRIMARY" bgColor="#FAE9EA" ftColor="#DD4D44"/>
            <CustomButton text= "Sign In With Apple" onPress= {apple}  type="PRIMARY" bgColor="#e3e3e3" ftColor="#DD4D44"/>
            <CustomButton text= "Don't have an account, create one" onPress= {singup}  type="TERTIARY"/>
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        height: '100%',
        paddingHorizontal:20,
       
    },
    logo: {
        width:  '100%',
        minWidth: 500,
        maxHeight: 200,
        
    }
})
export default SignInScreen;