import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductsNavigator from "./navigators/ProductsNavigator";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, useCallback } from "react";

const customDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background2: "#2B2C28",
    },
};

const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        one: "#6883BA",
        two: "#339989",
        three: "#65AFFF",
        four: "#235789",
        background2: "#EEF5DB",
    },
};

const addFonts = () => {
    return Font.loadAsync({
        "tajawal-Regular": require("./assets/fonts/Tajawal-Regular.ttf"),
        "tajawal-Bold": require("./assets/fonts/Tajawal-Bold.ttf"),
        "tajawal-ExtraBold": require("./assets/fonts/Tajawal-ExtraBold.ttf"),
    });
};

SplashScreen.preventAutoHideAsync();

function App() {
    const isDarkMode = useSelector((state) => state.productsSlice.isDarkMode);
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await addFonts();
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (
        !appIsReady ||
        !Font.isLoaded("tajawal-ExtraBold") ||
        !Font.isLoaded("tajawal-Bold") ||
        !Font.isLoaded("tajawal-Regular")
    ) {
        return <Text>sorry</Text>;
    }

    return (
        <NavigationContainer
            onReady={onLayoutRootView}
            theme={isDarkMode ? customDarkTheme : customTheme}
        >
            <StatusBar style="light" />
            <ProductsNavigator />
        </NavigationContainer>
    );
}

export default function ReduxWrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
