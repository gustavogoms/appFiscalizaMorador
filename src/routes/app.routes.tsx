import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import AppointmentCreated from '../pages/Conclusion';
import InsertAppointment from '../pages/InsertInformation';
import AddAdress from '../pages/AddAdress';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
    <App.Navigator
    screenOptions={{
        headerShown: false, 
        cardStyle: { backgroundColor: "#015e90" },
    }} 
    initialRouteName="Dashboard"
    >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />
    <App.Screen name="InsertAppointment" component={InsertAppointment} />
    <App.Screen name="AddAdress" component={AddAdress} />              
    </App.Navigator>
);

export default AppRoutes;

/*

import Dashboard from '../pages/Dashboard';
import AppointmentCreated from '../pages/AppointmentCreated';
import InsertAppointment from '../pages/InsertAppointment';
import AddAdress from '../pages/AddAdress';

<Auth.Screen name="Dashboard" component={Dashboard} />
<Auth.Screen name="AppointmentCreated" component={AppointmentCreated} />
<Auth.Screen name="InsertAppointment" component={InsertAppointment} />
<Auth.Screen name="AddAdress" component={AddAdress} />

*/