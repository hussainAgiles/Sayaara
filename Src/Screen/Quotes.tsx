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
import React, { useState } from 'react';
import Colors from '../Constants/Colors';
import { RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import Header from '../Components/Header/Header';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';


const QuickQuote = () => {
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

  const countryCode = [
    {
      id: 1,
      countryname: 'India',
      code: '+91'
    },
    {
      id: 2,
      countryname: 'Qatar',
      code: '+977'
    },
    {
      id: 3,
      countryname: 'Pakistan',
      code: '+92'
    },
    {
      id: 4,
      countryname: 'United Kingdom ',
      code: '+44'
    },
    {
      id: 5,
      countryname: 'Australia',
      code: '+61'
    }
  ]

  const [value, setValue] = useState('Mr');
  const [code, setCode] = useState('+91');
  const [isFocus, setIsFocus] = useState(false);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState(0);
  const [phone, setPhone] = useState(0);
  const [description, setDescription] = useState('');
  const [selectedValue, setSelectedValue] = useState('Individual');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [date, setDate] = useState('');



  const handleSelect = (selecetedOption: any) => {
    setSelectedValue(selecetedOption);
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const handleDateConfirm = (newdate: Date) => {
    setSelectedDate(newdate);
    setDatePickerVisibility(false);

    // Format the date as YYYY-MM-DD
    const date = newdate.toISOString().split('T')[0];
    setDate(date);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header text="Quick Quote" />
      <View
        style={{
          backgroundColor: Colors.Iconwhite,
          height: '80%',
          borderWidth: 0.7,
          padding: 20
        }}>

        <View style={{ borderWidth: 0.5, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../Assets/Images/Car.jpg')} style={{ height: 70, width: 100 }} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Toyota Innova Hycross (8 Seater)</Text>
              <Text style={{ fontSize: 14 }}>2.7L Limited Edition</Text>
              <Text style={{ fontSize: 12 }}> Quantity :02</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7 }}>
              <Text>QAR 99,000</Text>
              <Text>Quote Sent</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}
            onPress={() => handleSelect('Individual')}
          >
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selectedValue === 'Individual' ? 'blue' : 'gray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selectedValue === 'Individual' && (
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: 'blue',
                  }}
                />
              )}
            </View>
            <Text style={{ marginLeft: 10 }}>Individual</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => handleSelect('Company')}
          >
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selectedValue === 'Company' ? 'blue' : 'gray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selectedValue === 'Company' && (
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: 'blue',
                  }}
                />
              )}
            </View>
            <Text style={{ marginLeft: 10 }}>Company</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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
            style={[styles.input, { width: '80%' }]}
          />
        </View>
        <View style={{ width: '100%', paddingVertical: 15 }}>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={Colors.black}
            value={lastName}
            onChangeText={text => setLastname(text)}
            style={{
              borderWidth: 0.5,
              borderRadius: 25,
              padding: Platform.OS === 'ios' ? 8 : 6,
              height: 50,
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={countryCode}
            maxHeight={100}
            labelField="code"
            valueField="code"
            placeholder={!isFocus ? 'Mr' : '...'}
            value={code}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.code);
              setIsFocus(false);
            }}

          />
          <TextInput
            placeholder="Mobile"
            placeholderTextColor={Colors.black}
            value={mobile}
            onChangeText={text => setMobile(text)}
            style={[styles.input, { width: '80%' }]}
          />
        </View>

        {/* <View>
          <TouchableOpacity
            style={[
              styles.input,
              {
                borderWidth: 0.5,
                borderRadius: 3,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
              },
            ]}
            onPress={() => setDatePickerVisibility(true)}>
            <Text style={{ color: Colors.black }}>
              {selectedDate ? selectedDate.toDateString() : 'Select Date'}
            </Text>
            <Icon name="calendar" size={20} color={Colors.black} />
          </TouchableOpacity>
        </View> */}

        <View style={{ width: '100%' }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.black}
            value={email}
            onChangeText={text => setEmail(text)}
            style={{
              borderWidth: 0.5,
              borderRadius: 25,
              padding: Platform.OS === 'ios' ? 8 : 6,
              height: 50,
            }}
          />
        </View>

        {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setDatePickerVisibility(false)}
        // minimumDate={new Date()}
      /> */}

        <View style={{ width: '30%', backgroundColor: Colors.primary, alignItems: 'center', borderRadius: 30, paddingVertical: 15, alignSelf: 'center' }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: Colors.Iconwhite, fontSize: 18 }}>
              + Create
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default QuickQuote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.primary,
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
    borderWidth: 0.5,
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
    borderWidth: 0.5,
    borderRadius: 25,
    padding: Platform.OS === 'ios' ? 8 : 6,
    height: 50,
    marginLeft: 10,
    color: Colors.black
  },
});