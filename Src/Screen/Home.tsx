import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../Constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
    const data = [
      {
        id:1,
        icon_name :'phone',
        person:'Called Mr. Fauget',
        time:'11:15 AM',
        date:'May 4th, 2024'
      },
      {
        id:2,
        icon_name :'notebook-check-outline',
        person:'Send Quotation to Larana, Inc.',
        time:'11:15 AM',
        date:'May 3rd, 2024'
      },
      {
        id:3,
        icon_name :'phone',
        person:'Called Ms. Claudia',
        time:'11:15 AM',
        date:'May 4th, 2024'
      },
      {
        id:4,
        icon_name :'phone',
        person:'Called Mr. Fauget',
        time:'10:00 AM',
        date:'May 1st, 2024'
      }
    ]
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{color: Colors.black, fontSize: 14}}>Welcome back</Text>
          <Text
            style={{color: Colors.primary, fontSize: 20, fontWeight: 'bold'}}>
            Mr.Steve Pointing
          </Text>
          <Text style={{color: Colors.black, fontSize: 12}}>Sales Person</Text>
        </View>
        <View>
          <Image
            source={require('../Assets/Images/person.jpg')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </View>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#8a57fc', '#6daff1', '#5edbe7']}
        style={styles.target}>
        <Text
          style={{
            color: Colors.Iconwhite,
            fontSize: 12,
            paddingHorizontal: 10,
          }}>
          Target Achieved
        </Text>
        <Text
          style={{
            color: Colors.Iconwhite,
            fontSize: 25,
            fontWeight: 'bold',
            paddingHorizontal: 10,
          }}>
          QAR 25,500,00
        </Text>
        <Text
          style={{
            color: Colors.Iconwhite,
            fontSize: 12,
            paddingHorizontal: 10,
          }}>
          QAR 50,000,00/-
        </Text>
      </LinearGradient>

      <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
        <View>
          <View style={styles.textBox}>
            <Text style={styles.textBoxText}>7</Text>
          </View>
          <Text style={styles.bottomText}>To Do</Text>
        </View>
        <View>
          <View style={styles.textBox}>
            <Text style={styles.textBoxText}>5</Text>
          </View>
          <Text style={styles.bottomText}>Reports</Text>
        </View>
        <View>
          <View style={styles.textBox}>
            <Text style={styles.textBoxText}>5</Text>
          </View>
          <Text style={styles.bottomText}>Deliveries</Text>
        </View>
        <View>
          <View style={styles.textBox}>
            <Text style={styles.textBoxText}>12</Text>
          </View>
          <Text style={styles.bottomText}>Opportunities</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,marginHorizontal:18}}>
        <Text style={{color:Colors.black,fontWeight:'600'}}>Upcoming Activities</Text>
        <Text style={{color:Colors.black}}>View All</Text>
      </View>

      <View style={{flexDirection:'column',marginTop:10,marginHorizontal:12}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:Colors.primary,marginBottom:10,paddingLeft:5}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon name='car' size={30} color={Colors.black}/>
          <Text style={{color:Colors.black,paddingLeft:5}}>Delivery of Car to Mr.Sachin</Text>
          </View>
          <Text style={{color:Colors.black,marginRight:10}}>01:15 PM</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderColor:Colors.primary,paddingLeft:5}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon name='desktop-mac-dashboard' size={30} color={Colors.black}/>
          <Text style={{color:Colors.black,paddingLeft:5}}>Team Meeting</Text>
          </View>
          <Text style={{color:Colors.black,marginRight:10}}>04:00 PM</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,marginHorizontal:10}}>
        <Text style={{color:Colors.black,fontWeight:'600'}}>Recent Activities</Text>
        <Text style={{color:Colors.black}}>Sort by Latest</Text>
      </View>

      {data.map((item)=>(
        <View style={{flexDirection:'column',justifyContent:'space-between',marginTop:15}}>
        <View style={{flexDirection:'row',borderBottomWidth:0.5,paddingVertical:10}}>
          <Icon name={item.icon_name} size={25} color={Colors.black}/>
          <View style={{flexDirection:'column',paddingLeft:10}}>
            <Text style={{color:Colors.black,fontSize:18,fontWeight:'bold'}}>{item.person}</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:Colors.black}}>{item.date}</Text>
              <Text style={{color:Colors.black,paddingLeft:10}}>{item.time}</Text>
            </View>
          </View>
        </View>
      </View>
      ))}
      
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  target: {
    height: '11%',
    marginVertical: 30,
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  textBox: {
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: '#545454',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBoxText: {
    color: Colors.Iconwhite,
    fontWeight: 'bold',
    fontSize: 25,
  },
  bottomText: {
    color: Colors.black,
    // textAlign: 'center',
    fontWeight: '500',
    marginTop: 3,
  },

  // #545454
});
