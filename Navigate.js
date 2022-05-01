import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import { Movie } from './pages/Movie';
import { Explore } from './pages/Explore';
import { Premium } from './pages/Premium';
import { Profile } from './pages/Profile';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Movie'
                component={Movie}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Explore'
                component={Explore}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Premium'
                component={Premium}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}