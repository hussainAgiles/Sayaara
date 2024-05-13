import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';

import Home from '../Screen/Home';
import Colors from '../Constants/Colors';
import TabIcon from '../Components/TabBarIcon/tabBarIcon';
import Leads from '../Screen/Leads';
import Calendar from '../Screen/Calendar';
import Stock from '../Screen/Stock';
import { View } from 'react-native';
import Create from '../Screen/Create';
import QuickQuote from '../Screen/Quotes';

const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          padding: 2,
          height: Platform.OS === 'ios' ? 90 : 62,
          backgroundColor: Colors.Iconwhite,
          flexDirection: 'row',
          elevation: 5,
          justifyContent: 'center',
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => <TabIcon name="home" {...props} label="Home" />,
        }}
      />
      <Tab.Screen
        name="Leads"
        component={Leads}
        options={{
          tabBarIcon: props => (
            <TabIcon name="account-group" {...props} label="Leads" />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={QuickQuote}
        options={{
          tabBarIcon: () => (
            <View style={{marginBottom:60,height:50,width:50,borderRadius:25,backgroundColor:Colors.primary,justifyContent:'center',borderColor:Colors.Iconwhite,borderWidth:0.7}}>
              <Text style={{fontSize:38,color:Colors.white,textAlign:'center'}}>+</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: props => (
            <TabIcon name="calendar" {...props} label="Calendar" />
          ),
        }}
      />
      <Tab.Screen
        name="Stock"
        component={Stock}
        options={{
          tabBarIcon: props => <TabIcon name="car" {...props} label="Stock" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
