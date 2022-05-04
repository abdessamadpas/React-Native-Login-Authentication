import { View, Text,StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignUpScreen = () => {
    const {control, handleSubmit, formState:{errors}, watch}= useForm()

    const pwd = watch('password')
    const handleSubmi=(data)=>{
        console.warn(data)

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

            <CustomInput
                name='Username'
                required={{required:'required user'}}
                control={control}
                secureTextEntry= {false} 
                placeholder= 'Username'/>
            <CustomInput 
            name='email'
            required={{required:'required email'}}
            control={control}
            secureTextEntry= {false} placeholder= 'Email'/>
            <CustomInput 
            name='password'
            required={{required:'required password'}}
            control={control}
             secureTextEntry= {true} placeholder= 'Password'/>
            <CustomInput
            name='confirmPassword'
            required={{
               
                validate: value=> value ===  pwd || '3awd ktabo mgad azbi'
        }}
            control={control}
             secureTextEntry= {true} placeholder= 'confirmPassword'/>
            <CustomButton text= "SignIn" onPress= {handleSubmit(handleSubmi)}  type="PRIMARY"/>
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