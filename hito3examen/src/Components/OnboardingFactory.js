import React ,{ useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import ButtonLogin from '../Components/login/button';
import Colors from '../Config/Colors';
import Constants from '../Config/Constants';
import Images from '../Config/Images';
import ButtonFooter from '../Components/Onboarding/ButtonsFooter';
import Descripcion from '../Components/Onboarding/Descripcion';

const OnboardingFactory = ({ navigation,textoDesc,textoTit,source,onPressN,onPressP,isLoading }) => {

  return (
    <View style={styles.container}>
      <Descripcion 
      source={source}
      style={styles.desc}
      textoTit={textoTit}
      textoDesc={textoDesc}>
        
      </Descripcion>
      <ButtonFooter
        isLoading={isLoading}
        onPressP={onPressP}
        onPressN={onPressN}>
      </ButtonFooter>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingBottom:10,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
},
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 20,
  },
  desc:{
    textAlign:'center',
  }
});

export default OnboardingFactory;