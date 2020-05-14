import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen2 from '../View/login/LoginScreen2';
import RegisterScreen from '../View/Register/Register';
import PDM from '../View/Onboarding/WelcomeScreen';
import DefensaHito3 from '../View/Onboarding/AboutScreen';
import Firebase from '../View/Onboarding/TaskScreen';

import Colors from '../Config/Colors';

const Stack = createStackNavigator();

function mainNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pdm"
            component={PDM}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DefensaHito3"
            component={DefensaHito3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Firebase"
            component={Firebase}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen2}
            options={{
              title: 'Login From APP',
              headerStyle: {
                backgroundColor: Colors.bluee,
              },
              headerTintColor: Colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
                color: Colors.white,
              },
            }}
          />
          <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Register Form',
            headerStyle: {
              backgroundColor: Colors.appPrimary,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: Colors.white,
            },
          }}
        />
       
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default mainNavigator;