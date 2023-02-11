import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';//Wrapper for the whole application
import RootNavigation from './src/navigation';//Handles navigation and the main application

export default function App() {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    );
}
