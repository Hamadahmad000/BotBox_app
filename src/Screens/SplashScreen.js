import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {StackActions,useNavigation} from '@react-navigation/native'
const SplashScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
      setTimeout(() => {
        navigation.dispatch(StackActions.replace('Login'))
      }, 2000);
    
      return () => {
        
      }
    }, [])
    
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <View style={styles.SplashLogo}>
        <FontAwesome5 name='comment-dots' size={50} color='#1089FF'/>
        <Text style={{fontSize:33,paddingHorizontal:15,color:'black',fontWeight:'500'}}>botbox</Text>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    SplashLogo:{
        flexDirection:'row'
    }
})