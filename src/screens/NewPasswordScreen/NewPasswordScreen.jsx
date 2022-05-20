import React,{useState} from 'react'
import { View, Text,StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'



const NewPasswordScreen = () => {

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
        <Text style={styles.title}> Rest your password</Text>
        <CustomInput value= {codeConfirm} setValue= {setCodeConfirm} secureTextEntry= {false} placeholder= 'Confirmation code'/>
        <CustomButton text= "Submit" onPress= {codeConfirming}  type="PRIMARY"/>
        <CustomButton text= "Back to signIn" onPress= {backToSignIn}  type="TERTIARY"/>
    </View>
  )
}

export default NewPasswordScreen;


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

