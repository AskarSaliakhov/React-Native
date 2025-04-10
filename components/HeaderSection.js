import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderSection({ title, body }) {
    return (
        <View style={styles.section}>
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    body: {
        fontSize: 14,
        color: '#333',
    },
});
