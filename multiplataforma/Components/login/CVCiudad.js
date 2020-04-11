import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import CVCasos from '../../Components/login/CVCasos';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

export default class CVCiudad extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={stylesCVCiudad.container}>
                <Text style={stylesCVCiudad.Text}>
                {this.props.titleCiudad}
                </Text>
                <CVCasos
                    titleCasos={this.props.titleConfirmados}
                    onChangeText={this.props.onChangeTextConfirmados}
                    placeholder={this.props.confirmados}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}>
                </CVCasos>
                <CVCasos
                    titleCasos={this.props.titleSospechosos}
                    onChangeText={this.props.onChangeTextSospechosos}
                    placeholder={this.props.sospechosos}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}>
                </CVCasos>
            </View>
        );
    }
}

const stylesCVCiudad = StyleSheet.create({
    container: {

        flex: 4,
        backgroundColor: Colors.blue,
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    text: {
        alignItems: 'flex-start',
        height: 40,
    },
    
    form: {
        flex: 4,
        justifyContent: 'center',
        width: '100%',
    },
});
CVCiudad.propTypes = {
    titleSospechosos: PropTypes.string.isRequired,
    titleConfirmados: PropTypes.string.isRequired,
    titleCiudad: PropTypes.string.isRequired,
    confirmados: PropTypes.string.isRequired,
    sospechosos: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool
};