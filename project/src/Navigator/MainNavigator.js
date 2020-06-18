import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../View/login/LoginScreen';
import RegisterScreen from '../View/Register/Register';
import AppScreen from '../View/App/AppScreen';
import Colors from '../Config/Colors';
import SettingScreen from '../View/Setting/SettingScreen';
import SplashScreen from '../View/Splash/SplashScreen';

const Stack = createStackNavigator();
const StackScreen = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{route}}
        options={{ headerShown: false }}
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
  );
}
const Drawer = createDrawerNavigator();
const DrawerScreen=()=>{
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='App'
        component={AppScreen}
        options={{
          title: 'App Main',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
            fontSize: 25
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{ title: 'Settings' }}
      />
    </Drawer.Navigator>
  );
}
const MainStack = createStackNavigator();

const MainStackScreen = () =>{
  const [isLoading,setIsLoading]= React.useState(true);
  const [isLogged, setIsLogged]=React.useState(false);
  React.useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
  },[]);
  return (
    <MainStack.Navigator>
      { isLoading ? (
        <MainStack.Screen  name="Loading" component={SplashScreen}/>
        ) : isLogged ? (
        <MainStack.Screen name="DrawerNavigation" component={DrawerScreen}/>
        )
        :(
          <MainStack.Screen name="LoginRegister" component={StackScreen} initialParams={{setIsLogged}}/>
        )
      }
    </MainStack.Navigator>
  );
}


const mainNavigator=() =>{
  const [isLogged,setIsLogged]=React.useState(null);
  return (
    <NavigationContainer>
      <MainStackScreen/>
    </NavigationContainer>
  );
}
export default mainNavigator;