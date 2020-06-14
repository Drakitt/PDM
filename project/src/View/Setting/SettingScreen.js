import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';

import CTextField from '../../Components/CTextField';
import Button from '../../Components/login/button';
import FirebasePlugin, {firestore} from '../../plugins/firebase/Firebase';

import Constants from '../../Config/Constants';
import Utils from '../../utils/utils';

const SettingScreen = () => {
  const [emailName, setEmailName] = useState('');
  const [errorEmailName, setErrorEmailName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateCTextField = () => {
    let isValidField = Utils.isValidField(emailName);
    isValidField ?
      setErrorEmailName('') :
      setErrorEmailName(Constants.STRINGS.ENTER_EMAIL);
    return isValidField;
  };

  const onPressAdd = () => {
    let isValid = validateCTextField();
    if (isValid) {
      addEmailRowToFirebase();
      addGroupEmails();
    } else {
      Alert.alert(Constants.STRINGS.REVIEW_EMAIL);
    }
  }
  const addGroupEmails =(emailID,userID)=> {
    const emailsAddedRef = firestore
    .collection('groupEmails').doc(userID)
    .collection('email').doc('EMAILS_ADDED');
    Alert.alert('asd',userID);
    // emailsAddedRef.SET({
    //   userID: userID,
    // })
    // .then(function () {
    //   setIsLoading(false);
    //   Alert.alert('Email creado:', emailsAddedRef.id);
    // })
    // .catch(function (error) {
    //   Alert.alert('Error al crear', error.message);
    //   setIsLoading(false);
    // });
  }

  const addEmailRowToFirebase = () => {
    setIsLoading(true);

    const emailRef = firestore.collection('emails').doc();
    const userID = FirebasePlugin.auth().currentUser.uid;

    emailRef.set({
      emailID: emailRef.id,
      emailName: emailName,
      userID: userID,
    })
      .then(function () {
        setIsLoading(false);
        addGroupEmails(emailRef.id,userID);
        Alert.alert('Email creado:', emailRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <CTextField
        value={emailName}
        autoCorrect={false}
        placeholder={Constants.STRINGS.ADD_EMAIL}
        error={errorEmailName}
        onChange={(newEmailName) => {
          setEmailName(newEmailName);
        }}
        onValidate={validateCTextField}
      />
      <Button
        titleButton={Constants.STRINGS.ADD_EMAIL_BUTTON}
        onPress={onPressAdd}
        isLoading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;