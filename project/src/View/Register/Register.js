import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Alert
}
    from 'react-native';
import PropTypes from 'prop-types';
import { firestore } from '../../plugins/firebase/Firebase';
import FirebasePlugin from '../../plugins/firebase/Firebase'
import DimissKeyboard from '../../Components/login/DimissKeyboard';
import LogoLogin from '../../Components/login/logo';
import EmailTextField from '../../Components/login/EmailTextField';
import TextInputLogin from '../../Components/login/TextInputForm';

import ButtonLogin from '../../Components/login/button';
import Colors from '../../Config/Colors';
import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import imgPassword from '../../../assets/pass.png';
import Utils from '../../utils/utils';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onPress = () => {
    console.log('register');
  };

  const _validateEmailAddress = () => {
    let isvalidEmail = Utils.isValidEmail(email);
    isvalidEmail ? setErrorEmail('') : setErrorEmail(Constants.STRINGS.EMAIL_ERROR);
    return isvalidEmail;
  }
  const _validatePassword = () => {
    let isvalidPassword = Utils.isValidField(password);
    isvalidPassword ? setErrorPassword('') : setErrorPassword(Constants.STRINGS.PASSWORD_ERROR);
    return isvalidPassword;
  }
  const _onPress = () => {
    let emailData = _validateEmailAddress();
    let passwordData = _validatePassword();

    if (emailData && passwordData) {
      loginApp(email, password);
    } else {
      Alert.alert(Constants.STRINGS.EMPTY_TITLE, Constants.STRINGS.EMPTY_VALUES);
    }
  };

  const _onPressRegister = () => {
    FirebasePlugin.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setIsLoading(false);
        navigation.navigate('Login');
      })
      .catch(error => {
        setIsLoading(false);
        Alert.alert('Invalid Values', error.message);
      });
  }

  return (
    <View style={styles.container}>
      <DimissKeyboard>
        <KeyboardAvoidingView style={styles.container} behavior="height" enable>
          <View style={styles.container}>
            <View style={styles.form}>
              <EmailTextField
                onChangeText={(email) => { setEmail(email); }}
                onEndEditing={_validateEmailAddress}
                error={errorEmail}
                source={Images.EMAIL}
                placeholder={Constants.STRINGS.EMAIL}
                securetextEntry={false}
                autoCorrect={false}>
              </EmailTextField>
              <TextInputLogin
                onChangeText={(password) => { setPassword(password); }}
                source={imgPassword}
                error={errorPassword}
                onEndEditing={_validatePassword}
                placeholder={Constants.STRINGS.PASS}
                secureTextEntry={true}
                autoCorrect={false}>
              </TextInputLogin>
              <ButtonLogin
                isLoading={isLoading}
                onPress={_onPressRegister}
                titleButton={Constants.STRINGS.REGISTER_FORM}>
              </ButtonLogin>
            </View>
          </View>
        </KeyboardAvoidingView>
      </DimissKeyboard>
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