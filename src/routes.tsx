import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Splash from './pages/Spash';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default Routes;