import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LOGIN from '../View/login/LOGIN';
import MIAPP from '../View/Register/MIAPP';
import PDM from '../View/Sliders/PDM';
import DefensaHito3 from '../View/Sliders/DEFDENSAHITO3';
import Firebase from '../View/Sliders/FIREBASE';

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
            component={LOGIN}
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
          name="MIAPP"
          component={MIAPP}
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