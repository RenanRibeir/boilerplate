import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from  './components/Login/LoginPage';
import Home from  './components/Home/HomePage';

const Stack = createNativeStackNavigator();
export default function Routes(){

    return(

        <NavigationContainer>

          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>

        </NavigationContainer>

    );

}
