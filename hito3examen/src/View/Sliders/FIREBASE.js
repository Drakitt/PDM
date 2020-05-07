import React ,{ useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import ButtonLogin from '../../Components/login/button';
import Colors from '../../Config/Colors';
import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import ButtonFooter from '../../Components/login/ButtonsFooter';
import Descripcion from '../../Components/login/Descripcion';

const Firebase = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const _onPressP = () => {
    navigation.navigate('DefensaHito3');
  };
  const _onPressN = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Descripcion 
      source={Images.IMG3}
      style={styles.desc}
      textoTit={'FIREBASE'}
      textoDesc={'Integración de React Native con Firebase' }>
        
      </Descripcion>
      <ButtonFooter
        isLoading={isLoading}
        onPressP={_onPressP}
        onPressN={_onPressN}>
      </ButtonFooter>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingBottom:10,
    backgroundColor: Colors.green,
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

export default Firebase;