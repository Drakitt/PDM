import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Logo from '../img/coronavirus.png'

export default class logo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <Image source={Logo} style={styles.image}/>
                    <Text style={styles.text}>
                        Coronavairus
                    </Text>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:80,
        height:80,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:20,
    }
})