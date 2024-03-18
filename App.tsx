import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'react-native-rapi-ui';
import Navigation from './src/navigation';
import { AuthProvider } from './src/provider/AuthProvider';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {
    SplashScreen.preventAutoHideAsync();
    const images = [require('./assets/images/login.png'), require('./assets/images/register.png'), require('./assets/images/forget.png')];
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            Thin: require('./assets/fonts/Inter-Thin.ttf'),
            ExtraLight: require('./assets/fonts/Inter-ExtraLight.ttf'),
            Light: require('./assets/fonts/Inter-Light.ttf'),
            Regular: require('./assets/fonts/Inter-Regular.ttf'),
            Medium: require('./assets/fonts/Inter-Medium.ttf'),
            SemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
            Bold: require('./assets/fonts/Inter-Bold.ttf'),
            ExtraBold: require('./assets/fonts/Inter-ExtraBold.ttf'),
            Black: require('./assets/fonts/Inter-Black.ttf'),
        });
    };

    React.useEffect(() => {
        loadFonts();
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
