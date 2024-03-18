import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'react-native-rapi-ui';
import Navigation from './src/navigation';
import { AuthProvider } from './src/provider/AuthProvider';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    SplashScreen.preventAutoHideAsync();
    const images = [require('./assets/images/login.png'), require('./assets/images/register.png'), require('./assets/images/forget.png')];

    React.useEffect(() => {
        setTimeout(() => {
            SplashScreen.hideAsync();
        }, 3000);
    }, []);

    return (
        <ThemeProvider images={images}>
            <AuthProvider>
                <Navigation />
            </AuthProvider>
            <StatusBar />
        </ThemeProvider>
    );
}
