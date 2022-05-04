import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {

    const {height} = useWindowDimensions()
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    
    const navigation = useNavigation()

    const handleSubmit=()=>{
      //  console.warn('submites')
        navigation.navigate("Home")
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
                style={[styles.logo, {resizeMode: 'contain', height: height*0.7}]} />
            <CustomInput value= {username} setValue= {setUsername} secureTextEntry= {false} placeholder= 'Username'/>
            <CustomInput value= {password} setValue= {setPassword} secureTextEntry= {true} placeholder= 'Password'/>
            <CustomButton text= "SignIn" onPress= {handleSubmit}  type="PRIMARY"/>
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
        maxHeight:700
    },
    logo: {
        width:  '100%',
        maxWidth: 500,
        maxHeight: 200,
        
    }
})
export default SignInScreen;