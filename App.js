import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';//Wrapper for the whole application
import RootNavigation from './src/navigation';//Handles navigation and the main application
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';

export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            })();
    }, []);
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    );
}
