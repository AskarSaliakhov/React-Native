import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeAbout() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>О приложении</Text>
            <Text style={styles.text}>Это приложение для демонстрации навигации.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
    },
});
