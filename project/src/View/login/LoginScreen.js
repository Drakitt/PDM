import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity,Text} from 'react-native';

import ButtonLogin from '../../Components/login/button';
import TextInputLogin from '../../Components/login/TextInputForm';
import LogoLogin from '../../Components/login/logo';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

import imgUsername from '../../images/username.png';
import imgPassword from '../../images/pass.png';


export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
        this.state
        this._onPress = this._onPress.bind(this);
        this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
        this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
    }
    _onPress(){
        console.log('BUTTON PRESSED!!');
        console.log(this.state.username);
        console.log(this.state.password);
    }
    _onChangeTextUsername(){
        this.setState({
            username: username
        });
    }
    _onChangeTextPassword(){
        this.setState({
            password: password
        });
    }
    render(){
        return(
            <View style={stylesLoginScreen.container}>
                <LogoLogin style={stylesLoginScreen.logo}/>
                <View style={stylesLoginScreen.form}>
                    <TextInputLogin
                        onChangeText={this._onChangeTextUsername}
                        source={imgUsername}
                        placeholder={Constants.USERNAME}
                        securetextEntry={false}
                        autoCorrect={false}>
                    </TextInputLogin>
                    <TextInputLogin
                       onChangeText={this._onChangeTextPassword}
                       source={imgPassword}
                       placeholder={Constants.PASS}
                       securetextEntry={true}
                       autoCorrect={false}>
                    </TextInputLogin>
                    <ButtonLogin
                        onPress={this.onPress}
                        titleButton={Constants.TITLE_BUTTON}>
                    </ButtonLogin>
                </View>
            </View>
        );
    }
    }

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
});
