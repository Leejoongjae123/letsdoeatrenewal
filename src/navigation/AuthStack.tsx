import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Start from '../screens/auth/Start';
import UseTerms from '../screens/auth/UseTerms';
import PolicyTerms from '../screens/auth/PolicyTerms';

const AuthStack = createNativeStackNavigator();
const Auth = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name="Start" component={Start} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="UseTerms" component={UseTerms} />
            <AuthStack.Screen name="PolicyTerms" component={PolicyTerms} />
        </AuthStack.Navigator>
    );
};

export default Auth;
