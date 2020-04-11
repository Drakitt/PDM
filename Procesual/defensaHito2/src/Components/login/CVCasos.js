import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Config/Colors';

class CVCasos extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={stylesCVCasos.container}>
                <Text styles={stylesCVCasos.text}>
                    {this.props.titleCasos}
                </Text>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    style={stylesCVCasos.textInput}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    placeholderTextColor={Colors.white}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }
}

const stylesCVCasos = StyleSheet.create({
    container: {
        flexDirection:'row',
        flex: 3,
        backgroundColor: Colors.blue,
        alignItems: 'baseline',
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
    text: {
        alignItems: 'flex-start',
        height: 40,
    },
});
CVCasos.propTypes = {
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool
};

export default CVCasos;