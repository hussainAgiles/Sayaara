import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'column'}}>
      <Image source={require('../Assets/Images/Truck.jpg')} style={{height:200,width:350}}/>
      <Text style={{fontSize:18,fontWeight:'bold'}}>Drive in Style, Drive with Confidence! Get Behind the Wheel of Your Dream Machine Now!</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={{backgroundColor:'black',padding:15,borderRadius:20,width:'30%',alignItems:'center'}}>
          <Text style={{color:Colors.Iconwhite}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'black',padding:15,borderRadius:20,width:'30%',alignItems:'center'}}>
          <Text style={{color:Colors.Iconwhite}}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.Iconwhite,
    padding:10,
    justifyContent:'space-evenly'
  },
  loader: {
    width: 250,
    height: 200,
  },
});