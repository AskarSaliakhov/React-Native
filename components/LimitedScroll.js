import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function LimitedScroll() {
    const arrayExamples = ['Пример 1', 'Пример 2', 'Пример 3', 'Пример 4', 'Пример 5'];

    return (
        <>
            <Text style={styles.title}>Ограниченный скролл</Text>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.inner}>
                {arrayExamples.map((elem,index) => (
                    <Text key={index}>{elem}</Text>
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    scroll: {
        height: 120,
        backgroundColor: '#f7e0e0',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
    },
    inner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

