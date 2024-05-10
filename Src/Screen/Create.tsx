import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Constants/Colors';
import {RadioButton} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import Header from '../Components/Header/Header';

const Create = () => {
  const [checked, setChecked] = React.useState('first');
  const salutation = [
    {
      id: 1,
      label: 'Mr',
      value: 1,
    },
    {
      id: 2,
      label: 'Ms',
      value: 2,
    },
    {
      id: 3,
      label: 'Mrs',
      value: 3,
    },
    {
      id: 4,
      label: 'Sir',
      value: 4,
    },
    {
      id: 5,
      label: 'Dr',
      value: 5,
    },
  ];

  const [value, setValue] = useState('Mr');
  const [isFocus, setIsFocus] = useState(false);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState(0);
  const [phone, setPhone] = useState(0);
  const [description, setDescription] = useState('');

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header text="Create Lead"/>
      <View
        style={{
          backgroundColor: Colors.Iconwhite,
          height: '100%',
          // borderTopLeftRadius: 40,
          // borderTopRightRadius: 40,
          padding: 40,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={salutation}
            maxHeight={100}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Mr' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
          <TextInput
            placeholder="First Name"
            placeholderTextColor={Colors.black}
            value={firstName}
            onChangeText={text => setFirstname(text)}
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={Colors.black}
            value={lastName}
            onChangeText={text => setLastname(text)}
            style={{
              borderWidth: 1,
              borderColor:Colors.primary,
              borderRadius: 10,
              padding: Platform.OS === 'ios' ? 8 : 6,
              height: 50,
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={salutation}
            maxHeight={100}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Mr' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
          <TextInput
            placeholder="Mobile"
            placeholderTextColor={Colors.black}
            value={mobile}
            onChangeText={text => setMobile(text)}
            style={styles.input}
          />
        </View>
        <View style={{width: '100%'}}>
          <TextInput
            placeholder="Phone"
            placeholderTextColor={Colors.black}
            value={phone}
            onChangeText={text => setPhone(text)}
            style={{
              borderWidth: 1,
              borderColor:Colors.primary,
              borderRadius: 10,
              padding: Platform.OS === 'ios' ? 8 : 6,
              height: 50,
            }}
          />
        </View>
        <View style={{width: '100%'}}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.black}
            value={email}
            onChangeText={text => setEmail(text)}
            style={{
              borderWidth: 1,
              borderColor:Colors.primary,
              borderRadius: 10,
              padding: Platform.OS === 'ios' ? 8 : 6,
              height: 50,
            }}
          />
        </View>
        <View style={{width: '100%'}}>
          <TextInput
            placeholder="Additional Information"
            placeholderTextColor={Colors.black}
            value={description}
            onChangeText={text => setDescription(text)}
            style={{
              borderWidth: 1,
              borderColor:Colors.primary,
              borderRadius: 10,
              padding: Platform.OS === 'ios' ? 8 : 6,
              height: 100,
            }}
            multiline
          />
        </View>

        

        <View style={{width:'30%',backgroundColor:Colors.primary,justifyContent:'center',alignItems:'center',borderRadius:30,paddingVertical:15}}>
          <TouchableOpacity>
            <Text style={{color: Colors.Iconwhite}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: Colors.black,
  },
  dropdown: {
    height: 50,
    width: 60,
    borderWidth: 1,
    borderColor:Colors.primary,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: Colors.black,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.black,
  },
  input: {
    borderWidth: 1,
    borderColor:Colors.primary,
    borderRadius: 6,
    padding: Platform.OS === 'ios' ? 8 : 6,
    height: 50,
    width: '78%',
    marginLeft: 10,
    color:Colors.black
  },
});