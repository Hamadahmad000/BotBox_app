import { StyleSheet, Text, View ,TextInput,Dimensions, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {useNavigation,StackActions} from '@react-navigation/native'
const Login = () => {
  const navigation = useNavigation()
  const [isVisible, setisVisible] = useState(true)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [useIsValid, setuseIsValid] = useState(true)
  const LoginUSer = ()=>{
    if(email === 'hamad@gmail.com' && password === '12345'){
      setuseIsValid(true)
      navigation.dispatch(StackActions.replace('BottomTab'))
      
    }else{
      setuseIsValid(false)
    }
  }
  return (
    <View style={styles.MainContainer}>
      <View style={styles.TopDiv}>
        <FontAwesome5 name='comment-dots' size={50} color='#1089FF'/>
        <Text style={{fontSize:33,paddingHorizontal:15,color:'black',fontWeight:'500'}}>botbox</Text>
      </View>
      <View style={styles.InputFiledsMainContaienr}>
        <View><Text style={{fontWeight:'bold',fontSize:26,color:'black',marginBottom:10}}>Welcome back</Text></View>
        <View><Text style={{marginBottom:15}}>Please login to your account</Text></View>
        <View style={styles.TextMainContainer}>
          {/*  */}
          <View style={{marginVertical:13}}>

          <View style={[styles.TextContainer,{borderColor: useIsValid ?'black':'red',borderWidth:useIsValid?.4:2}]}>
            <Text>Email</Text>
            <TextInput style={{flex:1,paddingHorizontal:10}} value={email} onChangeText={(v)=>setemail(v)}/>
          </View>
           {!useIsValid? <Text style={{color:'red',padding:5}}>Invalid</Text> : null }

          </View>
          {/*  */}
          <View style={{marginVertical:13}}>

<View style={[styles.TextContainer,{borderColor: useIsValid ?'black':'red',borderWidth:useIsValid?.4:2}]}>
  <Text>Password</Text>
  <TextInput style={{flex:1,paddingHorizontal:10}} secureTextEntry={isVisible} value={password} onChangeText={(v)=>setpassword(v)}/>
  <TouchableOpacity onPress={()=>setisVisible(!isVisible?true:false)}><FontAwesome5 name={isVisible?'eye':'eye-slash'} size={20}/></TouchableOpacity>
</View>
  {!useIsValid? <Text style={{color:'red',padding:5}}>Invalid</Text> : null }

</View>
{/*  */}
<TouchableOpacity style={styles.LoginButton} onPress={()=>LoginUSer()}>
  <Text style={{color:'white',fontSize:16,letterSpacing:1}}>Sign in</Text>
</TouchableOpacity>
{/*  */}
<View style={styles.PasswordForgetDiv}>
  <TouchableOpacity>
    <Text style={{color:'#1089FF',fontWeight:'500',fontSize:15}}>Forget password?</Text>
  </TouchableOpacity>
</View>
        </View>
      </View>
    </View>
  )
}

export default Login

const {width,height} = Dimensions.get('screen')
const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
    },
    TopDiv:{
    flexDirection:'row',
    paddingVertical:77,
    paddingHorizontal:30,alignItems:'center'
    
    },
    InputFiledsMainContaienr:{

      flex:1,
      padding:20
      
    },
    TextMainContainer:{
      alignItems:'center'
    },
    TextContainer:{
      borderWidth:.3,
      
      flexDirection:'row',
      alignItems:'center',
      width:width-40,
      borderRadius:5,
      paddingHorizontal:10,
      borderColor:'black'
    },
    LoginButton:{
      backgroundColor:'#1089FF',
      width:width-40,
      alignItems:'center',
      justifyContent:'center',
      paddingVertical:16,
borderRadius:6,
marginVertical:15
    },
    PasswordForgetDiv:{
      marginVertical:15,

    }
    
})