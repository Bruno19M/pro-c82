import Reacat from 'react';
import { createDrawerNavigator } from 'reactor-navigation/drawer';
import TabNavigator from './TabNavigator'
import Profile from "../pantallas/Profile"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name ="Home" component={TabNavigator} />
            <Drawer.Screen name ="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;