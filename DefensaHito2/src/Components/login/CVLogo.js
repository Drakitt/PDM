import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Logo from '../../images/coronavirus.png'

export default class CVLogo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
                <View style={styles.container}>
                    <Image source={Logo} style={styles.image}/>
                    <Text style={styles.text}>
                        Epidemia Corona Virus
                    </Text>
                </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent',
    },
    image:{
        width:80,
        height:80,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:10,
    }
});
