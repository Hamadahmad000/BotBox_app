import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Messages from '../Screens/Messages'
import Leads from '../Screens/Leads'
const BottomTab = () => {
    const Tab = createBottomTabNavigator()
  return (
   <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarActiveTintColor:'black',tabBarShowLabel:false,tabBarStyle:{height:60}}}>
    <Tab.Screen name='Home' component={Home} options={{headerShown:false,title:'Home',tabBarIcon:({focused})=>{
        return <Image source={require('../../assets/Icons/icons8-home-page-32.png')} style={{height:35,width:35,tintColor:focused?'black':'#6e6e6e'}}/>
    }}} />
    <Tab.Screen name='Messages' component={Messages} options={{headerShown:false,title:'Messages',tabBarIcon:({focused})=>{
        return <Image source={require('../../assets/Icons/icons8-messages-50.png')} style={{height:35,width:35,tintColor:focused?'black':'#6e6e6e'}}/>
    }}} />
    <Tab.Screen name='Leads' component={Leads} options={{headerShown:false,title:'Leads',tabBarIcon:({focused})=>{
        return <Image source={require('../../assets/Icons/icons8-downloads-32.png')} style={{height:35,width:35,tintColor:focused?'black':'#6e6e6e'}}/>
    }}} />
   </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})