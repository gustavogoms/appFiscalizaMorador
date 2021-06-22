import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Conclusion from '../pages/Conclusion';
import AddAdress from '../pages/AddAdress';
import InsertInformation from '../pages/InsertInformation';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
    <App.Navigator screenOptions={{
            headerShown: false, 
            cardStyle: { backgroundColor: "#015e90" },}} 
        initialRouteName="Dashboard">
        <App.Screen name="Dashboard" component={Dashboard} />
        <App.Screen name="Conclusion" component={Conclusion} />
        <App.Screen name="InsertInformation" component={InsertInformation} />
        <App.Screen name="AddAdress" component={AddAdress} />              
    </App.Navigator>
);

export default AppRoutes;