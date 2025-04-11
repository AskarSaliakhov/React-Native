import React, { useCallback, useState } from 'react';
import {
    View,
    Button,
    StyleSheet,
    Animated,
} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FONTS } from "./consts/consts";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts(FONTS);
    const [currentFont, setCurrentFont] = useState('CustomFont1');
    const [language, setLanguage] = useState('ru');
    const textOpacity = useState(new Animated.Value(1))[0];

    const switchFont = () => {
        Animated.sequence([
            Animated.timing(textOpacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(textOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setCurrentFont((prevFont) =>
                prevFont === 'CustomFont1' ? 'CustomFont2' : 'CustomFont1'
            );
        });
    };

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View
            style={styles.container}
            onLayout={onLayoutRootView}
        >
            <View style={styles.contentContainer}>
                <Picker
                    selectedValue={language}
                    style={styles.picker}
                    onValueChange={setLanguage}
                >
                    <Picker.Item
                        label="Русский"
                        value="ru"
                    />
                    <Picker.Item
                        label="English"
                        value="en"
                    />
                </Picker>
                <Button
                    title="Поменять"
                    onPress={switchFont}
                />
                <Animated.Text
                    style={[styles.text, { fontFamily: currentFont, opacity: textOpacity }]}
                >
                    {language === 'ru' ? 'Это кастомный шрифт!' : 'This is a custom font!'}
                </Animated.Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        margin: 20,
    },
    picker: {
        height: 50,
        width: 150,
    },
});
