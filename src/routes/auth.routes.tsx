import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import AppointmentCreated from '../pages/AppointmentCreated';
import InsertAppointment from '../pages/InsertAppointment';
import AppointmentMap from '../pages/AppointmentMap';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
    screenOptions={{
        headerShown: false, 
        cardStyle: { backgroundColor: "#1C1C1C" },
    }} 
    initialRouteName="AppointmentMap"
    >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
        <Auth.Screen name="Dashboard" component={Dashboard} />
        <Auth.Screen name="AppointmentCreated" component={AppointmentCreated} />
        <Auth.Screen name="InsertAppointment" component={InsertAppointment} />
        <Auth.Screen name="AppointmentMap" component={AppointmentMap} />

              
    </Auth.Navigator>
);

export default AuthRoutes;