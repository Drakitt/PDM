import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Image, TextBase } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Config/Colors';
import Button from '../../Components/login/ButtonPyN'
import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
const Descripcion = ({ source, textoDesc, textoTit,navigation }) => {
    return (
        <View style={styleDescripcion.container}>
            <Image  style={styleDescripcion.image} source={source} />

            <View >
                <Text style={styleDescripcion.text1}>
                    {textoTit}
                </Text>
                <Text style={styleDescripcion.text}
                multiline={true}>
                    {textoDesc}
                </Text>
            </View>
        </View>
    );
}


const styleDescripcion = StyleSheet.create({
    container: {
        flex: 3,
        top:-30,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width: 400,
        height: 500,
        top: -140,
        right: -100,
    },
    text1: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
        fontSize:30,
    },
    text: {
        width: Constants.CONFIG.SCREEN_WIDTH * 0.75,
        alignSelf: 'center',
        textAlign:'center',
        color: 'white',
        fontSize:18,
        fontFamily:'times',
        backgroundColor: 'transparent',
        margin: 20,
    }

});

export default Descripcion;