import {Dimensions} from 'react-native';

const config ={
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
    HEADER_HEIGHT: Dimensions.get('window').height-45,
}
const string ={
    PASS:"Password",
    USERNAME:"Username",
    DEFAULT_MARGIN_BURRON:50,
    TITLE_BUTTON:"INGRESAR",
    NAME_APP: 'CORONA V',
    EMAIL:  'Email',
    EMAIL_ERROR:  'Email Incorrecto!!!',
    USERNAME_ERROR:"Username Incorrecto!!!",
    PASSWORD_ERROR:"Password Incorrecto!!!",
    REGISTER: 'Register',
    EMPTY_TITLE: 'Review Email/Password values',
    EMPTY_VALUES: 'Empty values detected',
    REVIEW_EMAIL: 'Please review email data',
    ENTER_EMAIL: 'Enter email value',
    ADD_EMAIL: 'Enter Email',
    ADD_EMAIL_BUTTON: 'ADD',
}

export default {
    CONFIG: config,
    STRINGS: string,
}