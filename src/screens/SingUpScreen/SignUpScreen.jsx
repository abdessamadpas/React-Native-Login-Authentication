import { View, Text,StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import React,{useState} from 'react'

const SignUpScreen = () => {
    const {height} = useWindowDimensions()
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
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
    const singup=()=>{
        console.warn('singup')
    }
    const policy=()=>{
        console.warn('policy')
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}> Create an account</Text>
            <CustomInput value= {username} setValue= {setUsername} secureTextEntry= {false} placeholder= 'Username'/>
            <CustomInput value= {email} setValue= {setEmail} secureTextEntry= {false} placeholder= 'Email'/>
            <CustomInput value= {password} setValue= {setPassword} secureTextEntry= {true} placeholder= 'Password'/>
            <CustomInput value= {confirmPassword} setValue= {setConfirmPassword} secureTextEntry= {true} placeholder= 'confirmPassword'/>
            <CustomButton text= "SignIn" onPress= {handleSubmit}  type="PRIMARY"/>
            <Text style={styles.text}>I am currently using ES6 in an React app via{' '}
             <Text style={styles.link} onPress={policy}> wew</Text> babel.
             <Text style={styles.link}onPress={policy}> wew</Text> babel.
             I am using index files to 
            </Text>
            <CustomButton text= "Sign In With Facebook" onPress= {facebook}  type="PRIMARY" bgColor="#E7EAF4" ftColor="#4765A9"/>
            <CustomButton text= "Sign In With Google" onPress= {google}  type="PRIMARY" bgColor="#FAE9EA" ftColor="#DD4D44"/>
            <CustomButton text= "Sign In With Apple" onPress= {apple}  type="PRIMARY" bgColor="#e3e3e3" ftColor="#DD4D44"/>
        </View>
    </ScrollView>
   
  )
}

export default SignUpScreen

const styles= StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        //height:700
        backgroundColor: '#f8f8f8',
    },
    title : {
        //width:400,
        //height:00,
        fontSize:45,
        color:'#ffb259',
    
        fontWeight: 'bold',
        marginVertical:50
    },
    text:{
        marginVertical:10,
        color:'grey' ,
     

    },
    link:{
        color:'#ffb259'
    },
  
}
)