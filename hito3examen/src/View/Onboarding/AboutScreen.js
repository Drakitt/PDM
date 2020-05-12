import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import ButtonLogin from '../../Components/login/button';
import Colors from '../../Config/Colors';
import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import OnboardingFactory from '../../Components/OnboardingFactory';

const AboutScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const _onPressP = () => {
    navigation.navigate('Pdm');
  };
  const _onPressN = () => {
    navigation.navigate('Firebase');
  };


  return (
    <View style={styles.container}>
      <OnboardingFactory
        source={Images.IMG2}
        style={styles.desc}
        textoTit={'DEFENSA HITO3'}
        textoDesc={'Univ. William Barra Gestión 2020'}
        isLoading={isLoading}
        onPressP={_onPressP}
        onPressN={_onPressN}
      >
      </OnboardingFactory>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingBottom: 10,
    backgroundColor: Colors.orange,
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 20,
  },
  desc: {
    textAlign: 'center',
  }
});

export default AboutScreen;