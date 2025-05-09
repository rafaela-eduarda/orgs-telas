import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../telas/Home';
import MelhoresProdutos from '../telas/MelhoresProdutores';

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return<NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='MelhoresProdutos' component={MelhoresProdutos} />
        </Tab.Navigator>
    </NavigationContainer>
}