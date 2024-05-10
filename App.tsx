import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Navigation from './Src/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Src/Screen/Login';
import Splashscreen from './Src/Screen/Splashscreen';
import Dashboasrd from './Src/Screen/Dashboasrd';
import MainNavigator from './Src/Navigation/MainNavigation';
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();


// const Main = () => {
//   return (
//     <>
//       <Navigation />
//       <StatusBar />
//     </>
//   );
// };

const App = () => {
  // const [isSplashVisible, setSplashVisible] = useState(true);
  

  // useEffect(() => {
  //   const splashTimeout = setTimeout(() => {
  //     setSplashVisible(false);
  //   }, 3000);

  //   // Clean up the timeout to avoid memory leaks
  //   return () => clearTimeout(splashTimeout);
  // }, []);
  return (
    <PaperProvider>
       <NavigationContainer>
      <Stack.Navigator initialRouteName='DashBoard' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="DashBoard" component={MainNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
   
    
    
  )
}

export default App

const styles = StyleSheet.create({})