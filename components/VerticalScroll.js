import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function VerticalScroll() {

    const arrayExamples = ['Пример 1', 'Пример 2', 'Пример 3', 'Пример 4', 'Пример 5'];
    return (
        <>
            <Text style={styles.title}>Вертикальный скроллинг</Text>
            <ScrollView style={styles.scroll}>
                {arrayExamples.map((elem, index) => (
                    <View key={index} style={styles.item}>
                        <Text>{ elem }</Text>
                    </View>
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
        backgroundColor: '#ffc1c1',
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 5,
        borderRadius: 8,
        elevation: 2,
    },
});
