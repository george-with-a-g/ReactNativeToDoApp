import { NavigationContainer } from '@react-navigation/native';//Wrapper for the whole application
import AuthContextProvider from './src/contexts/';//for sharing state accross multiple screens
import RootNavigation from './src/navigation';//Handles navigation and the main application

export default function App() {
    return (
        <NavigationContainer>
            <AuthContextProvider>
                <RootNavigation />
            </AuthContextProvider>
        </NavigationContainer>
    );
}
