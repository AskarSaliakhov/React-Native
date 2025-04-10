import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function HorizontalScroll() {
    const arrayExamples = ['Пример 1', 'Пример 2', 'Пример 3', 'Пример 4', 'Пример 5'];
    return (
        <>
            <Text style={styles.title}>Горизонтальный скроллинг</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
                {arrayExamples.map((elem, index) => (
                    <View
                        key={index}
                        style={styles.item}
                    >
                        <Text>{elem}</Text>
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
        marginBottom: 20,
    },
    item: {
        width: 100,
        height: 100,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
    },
});
