import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import ButtonLogin from '../../Components/login/button';
import CVCiudad from '../../Components/login/CVCiudad';
import CVLogo from '../../Components/login/CVLogo';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';


export default class CVScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: '',
            sospechososCocha: '',
            confirmadosCocha: '',
            sospechososSanta: '',
            confirmadosSanta: '',
            sospechososOruro: '',
            confirmadosOruro: ''

        };
        this.state
        this._onPress = this._onPress.bind(this);
        this._onChangeTextConfirmadosCocha = this._onChangeTextConfirmadosCocha.bind(this);
        this._onChangeTextSopechososCocha = this._onChangeTextSopechososCocha.bind(this);
        this._onChangeTextConfirmadosSanta = this._onChangeTextConfirmadosSanta.bind(this);
        this._onChangeTextSopechososSanta = this._onChangeTextSopechososSanta.bind(this);
        this._onChangeTextConfirmadosOruro = this._onChangeTextConfirmadosOruro.bind(this);
        this._onChangeTextSopechososOruro = this._onChangeTextSopechososOruro.bind(this);
        this._onChangeText = this._onChangeText.bind(this);
    }
    _onPress() {
        console.log('BUTTON PRESSED!!');
        if (this.state.busqueda == 'sospechosos') {
            console.log(Math.max(parseInt(this.state.sospechososCocha, 10), parseInt(this.state.sospechososSanta, 10), parseInt(this.state.sospechososOruro, 10)));
        } else if (this.state.busqueda == 'confirmados'){
            console.log(Math.max(parseInt(this.state.confirmadosCocha, 10), parseInt(this.state.confirmadosSanta, 10), parseInt(this.state.confirmadosOruro, 10)));

        }

    }
    _onChangeTextConfirmadosCocha(confirmadosCocha) {
        this.setState({
            confirmadosCocha: confirmadosCocha
        });
    }
    _onChangeTextSopechososCocha(sospechososCocha) {
        this.setState({
            sospechososCocha: sospechososCocha
        });
    }
    _onChangeTextConfirmadosSanta(confirmadosSanta) {
        this.setState({
            confirmadosSanta: confirmadosSanta
        });
    }
    _onChangeTextSopechososSanta(sospechososSanta) {
        this.setState({
            sospechososSanta: sospechososSanta
        });
    }
    _onChangeTextConfirmadosOruro(confirmadosOruro) {
        this.setState({
            confirmadosOruro: confirmadosOruro
        });
    }
    _onChangeTextSopechososOruro(sospechososOruro) {
        this.setState({
            sospechososOruro: sospechososOruro
        });
    }
    _onChangeText(busqueda) {
        this.setState({
            busqueda: busqueda

        }); 
    }
    render() {
        return (
            <View style={stylesCVScreen.container}>
                <CVLogo style={stylesCVScreen.logo} />
                <View style={stylesCVScreen.form}>
                    <CVCiudad
                        titleConfirmados={Constants.CONFIRMADOS}
                        titleSospechosos={Constants.SOSPECHOSOS}
                        titleCiudad={Constants.COCHABAMBA}
                        onChangeTextConfirmados={this._onChangeTextConfirmadosCocha}
                        onChangeTextSospechosos={this._onChangeTextSopechososCocha}
                        confirmados={Constants.TEXTO_CASOS}
                        sospechosos={Constants.TEXTO_CASOS}
                        securetextEntry={false}
                        autoCorrect={false}>
                    </CVCiudad>
                    <CVCiudad
                        titleCiudad={Constants.SANTA_CRUZ}
                        titleConfirmados={Constants.CONFIRMADOS}
                        titleSospechosos={Constants.SOSPECHOSOS}
                        onChangeTextConfirmados={this._onChangeTextConfirmadosSanta}
                        onChangeTextSospechosos={this._onChangeTextSopechososSanta}
                        confirmados={Constants.TEXTO_CASOS}
                        sospechosos={Constants.TEXTO_CASOS}
                        securetextEntry={false}
                        autoCorrect={false}>
                    </CVCiudad>
                    <CVCiudad
                        titleCiudad={Constants.ORURO}
                        titleConfirmados={Constants.CONFIRMADOS}
                        titleSospechosos={Constants.SOSPECHOSOS}
                        onChangeTextConfirmados={this._onChangeTextConfirmadosOruro}
                        onChangeTextSospechosos={this._onChangeTextSopechososOruro}
                        confirmados={Constants.TEXTO_CASOS}
                        sospechosos={Constants.TEXTO_CASOS}
                        securetextEntry={false}
                        autoCorrect={false}>
                    </CVCiudad>
                    <View>
                        <TextInput
                            onChangeText={this._onChangeText}
                            style={stylesCVScreen.textInput}
                            placeholder={Constants.INGRESE_BUSQUEDA}
                            value={this.state.value}
                            placeholderTextColor={Colors.white}
                            underlineColorAndroid="transparent" />
                        <ButtonLogin
                            onPress={this._onPress}
                            titleButton={Constants.TITLE_BUTTON}>
                        </ButtonLogin>
                    </View>
                </View>
            </View>
        );
    }
}

const stylesCVScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignItems: 'flex-end',
        height: 40,
        borderColor: Colors.silver,
        paddingLeft: 40,
        borderRadius: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 5,
    },
    logo: {
        flex: 1,
        width: '100%',
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
    form: {
        flex: 4,
        justifyContent: 'center',
        width: '80%',
    },
});
CVScreen.propTypes = {

};