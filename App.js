import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/components/RegisterScreen';
import RecoveryScreen from './src/components/RecoveryScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Recovery" component={RecoveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;