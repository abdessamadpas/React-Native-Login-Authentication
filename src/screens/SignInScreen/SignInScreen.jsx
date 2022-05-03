import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'

const SignInScreen = () => {
    const {height} = useWindowDimensions()
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const handleSubmit=()=>{
        console.warn('submites')
    }
    const forgetPassword=()=>{
        console.warn('forgetPassword')
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
    
  return (
    <View style={styles.root}>
        <Image source={require('../../../assets/images/logo-dev.png')}
            style={[styles.logo, {resizeMode: 'contain', height: height*0.3}]} />
        <CustomInput value= {username} setValue= {setUsername} secureTextEntry= {false} placeholder= 'Username'/>
        <CustomInput value= {password} setValue= {setPassword} secureTextEntry= {true} placeholder= 'Password'/>
        <CustomButton text= "SignIn" onPress= {handleSubmit}  type="PRIMARY"/>
        <CustomButton text= "ForgetPassword" onPress= {forgetPassword}  type="TERTIARY"/>
        <CustomButton text= "Facebook" onPress= {facebook}  type="PRIMARY" bgColor="#E7EAF4" ftColor="#4765A9"/>
        <CustomButton text= "Google" onPress= {google}  type="PRIMARY" bgColor="#FAE9EA" ftColor="#"/>
        <CustomButton text= "Apple" onPress= {apple}  type="PRIMARY" bgColor="#e3e3e3" ftColor="#363636"/>
DD4D44
        </View>
  )
}


const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        height: '100%',
        padding: 20
    },
    logo: {
        width:  '100%',
        maxWidth: 500,
        maxHeight: 200,
        
    }
})
export default SignInScreen;