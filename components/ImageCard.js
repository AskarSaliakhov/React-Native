import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ImageCard({ title, image, caption }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Image source={image} style={styles.image} />
            <Text style={styles.caption}>{caption}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        borderRadius: 8,
    },
    caption: {
        fontSize: 14,
        color: '#555',
    },
});
