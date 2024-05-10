import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'
import LottieView from 'lottie-react-native'

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Iconwhite,
  },
  loader: {
    width: 250,
    height: 200,
  },
});