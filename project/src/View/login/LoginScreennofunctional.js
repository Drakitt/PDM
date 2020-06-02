import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, KeyboardAvoidingView, KeyboardAvoidingViewBase } from 'react-native';

import ButtonLogin from '../../Components/login/button';
import TextInputLogin from '../../Components/login/TextInputForm';
import LogoLogin from '../../Components/login/logo';
import EmailTextField from '../../Components/login/EmailTextField';
import DimissKeyboard from '../../Components/login/DimissKeyboard';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

import imgUsername from '../../../assets/username.png';
import imgPassword from '../../../assets/pass.png';
import Utils from '../../utils/utils';


export default class LoginScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.state
        this._onPress = this._onPress.bind(this);
        this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
        this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
    }
    _validateEmailAddress(email) {

    }
    _onChangeTextEmail() {

    }
    _onPress() {
        console.log('BUTTON PRESSED!!');
        console.log(this.state.username);
        console.log(this.state.password);
    }
    _onChangeTextUsername(username) {
        this.setState({
            username: username
        });
    }
    _onChangeTextPassword(password) {
        this.setState({
            password: password
        });
    }
    render() {
        return (
            <DimissKeyboard>
                <KeyboardAvoidingView style ={stylesLoginScreen.container} >
                    <View style={stylesLoginScreen.container}>
                        <LogoLogin style={stylesLoginScreen.logo} />
                        <View style={stylesLoginScreen.form}>
                            <TextInputLogin
                                onChangeText={this._onChangeTextUsername}
                                source={imgUsername}
                                placeholder={Constants.STRINGS.USERNAME}
                                securetextEntry={false}
                                autoCorrect={false}>
                            </TextInputLogin>
                            <EmailTextField
                                onChangeText={this._onChangeTextEmail}
                                onEndEditing={this._validateEmailAddress}
                                placeholder={Constants.STRINGS.EMAIL}
                                securetextEntry={false}
                                autoCorrect={false}>
                            </EmailTextField>
                            {/* <TextInputLogin
                                onChangeText={this._onChangeTextPassword}
                                source={imgPassword}
                                placeholder={Constants.STRINGS.PASS}
                                securetextEntry={true}
                                autoCorrect={false}>
                            </TextInputLogin> */}
                            <ButtonLogin
                                onPress={this._onPress}
                                titleButton={Constants.STRINGS.TITLE_BUTTON}>
                            </ButtonLogin>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </DimissKeyboard>
        );
    }
}

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
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
    },
});
