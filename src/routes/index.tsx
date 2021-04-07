import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AppointmentCreated from '../pages/AppointmentCreated';
import LoadingScreen from '../pages/LoadingScreen'

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
    screenOptions={{
        headerShown: false, 
        cardStyle: { backgroundColor: "#1C1C1C" },
    }} 
    initialRouteName="SignIn"
    >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
        <Auth.Screen name="AppointmentCreated" component={AppointmentCreated} />
        <Auth.Screen name="LoadingScreen" component={LoadingScreen} />
    </Auth.Navigator>
);

export default AuthRoutes;