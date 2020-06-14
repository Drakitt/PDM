import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Alert
}
    from 'react-native';

import ButtonLogin from '../../Components/login/button';
import TextInputLogin from '../../Components/login/TextInputForm';
import LogoLogin from '../../Components/login/logo';
import EmailTextField from '../../Components/login/EmailTextField';
import DimissKeyboard from '../../Components/login/DimissKeyboard';
import FirebasePlugin from '../../plugins/firebase/Firebase'

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';
import Images from '../../Config/Images';

import imgPassword from '../../../assets/pass.png';
import Utils from '../../utils/utils';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
    const _onRegister = () => {
        navigation.navigate('Register');
    };

    const loginApp = (email, password) => {
        try {
            setIsLoading(true);
            FirebasePlugin.auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    setIsLoading(false);
                    navigation.navigate('App');
                })
                .catch(error => {
                    setIsLoading(false);
                    Alert.alert('invalid Values',error.message);
                });
        } catch (error) {
            setIsLoading(true);
            Alert.alert('Firebase Error', error.message);
        }
    };
    return (
        <DimissKeyboard>
            <KeyboardAvoidingView style={stylesLoginScreen.container} behavior="height" enable>
                <View style={stylesLoginScreen.container}>
                    <LogoLogin style={stylesLoginScreen.logo} />
                    <View style={stylesLoginScreen.form}>
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
                        <View style={stylesLoginScreen.button}>
                            <ButtonLogin
                                isLoading={isLoading}
                                onPress={_onPress}
                                titleButton={Constants.STRINGS.TITLE_BUTTON}>
                            </ButtonLogin>
                        </View>
                        <View>
                            <ButtonLogin
                                isLoading={isLoading}
                                onPress={_onRegister}
                                titleButton={Constants.STRINGS.REGISTER_FORM}>
                            </ButtonLogin>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </DimissKeyboard>
    );
}

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {
        justifyContent: 'center',
        width: '80%',
        marginBottom: 20,
    },
    button: {
        marginBottom: 10,
      },
});


export default LoginScreen;
