import React, {Component} from 'react';
import {StyleSheet, View, TextInput,Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Config/Colors';

class TextInputForm extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <View>
                <Image source={this.props.source}
                style={stylesTextInput.inlineImg}/>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    style={stylesTextInput.textinput}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    placeholderTextColor={Colors.white}
                    underlineColorAndroid="transparent"/>
            </View>
        );
    }
}

const stylesTextInput = StyleSheet.create({
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    height: 40,
    borderColor: Colors.silver,
    paddingLeft: 40,
    borderRadius: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 10,
    top: 9,
  },
});
TextInputForm.propTypes = {
    source:PropTypes.number.isRequired,
    placeholder:PropTypes.string.isRequired,
    autoCorrect:PropTypes.bool,
    secureTextEntry:PropTypes.bool
};

export default TextInputForm;
