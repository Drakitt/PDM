import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Config/Colors';
import Button from '../../Components/login/ButtonPyN'
import Constants from '../../Config/Constants';

const ButtonsFooter = ({  onPressP,onPressN, isLoading, navigation }) => {
    return (
        <View style={styleButtonsFooter.container}>
            <Button
                isLoading={isLoading}
                onPress={onPressP}
                titleButton={Constants.STRINGS.PREV}>
            </Button>
            <Button
                isLoading={isLoading}
                onPress={onPressN}
                titleButton={Constants.STRINGS.NEXT}>
            </Button>
        </View>
    );
}


const styleButtonsFooter = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    
});

export default ButtonsFooter;