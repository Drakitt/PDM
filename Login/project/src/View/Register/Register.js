import React from 'react';
import {StyleSheet, View, TextInput,Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import ButtonLogin from'../../Components/login/button';
import Colors from '../../Config/Colors';
import Constants from'../../Config/Constants';
import Images from'../../Config/Images';

const RegisterScreen = ({navigation}) => {
    const onPress = () => {
      console.log('register');
    };
  
    return (
      <View style={styles.container}>
        <Text>Register Screen</Text>
        <ButtonLogin onPress={onPress} titleButton={Constants.STRINGS.REGISTER} />
      </View>
    );
  };
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.blue,
      alignItems: 'center',
    },
    text: {
      color: Colors.white,
      textAlign: 'center',
      fontWeight: 'bold',
      height: 20,
    },
  });

export default RegisterScreen;