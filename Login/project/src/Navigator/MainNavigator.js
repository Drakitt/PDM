import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../View/login/LoginScreen';
import LoginScreen2 from '../View/login/LoginScreen2';
import RegisterScreen from '../View/Register/Register';
import Administration from '../View/login/LoginScreen';

import Colors from '../Config/Colors';

const Stack = createStackNavigator();

function mainNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen2}
            options={{headerShown: false}}
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