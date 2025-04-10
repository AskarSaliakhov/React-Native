import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

export default function TextInputDemo() {
    const [search, setSearch] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    return (
        <View>
            <Text style={styles.title}>Search</Text>
            <TextInput
                placeholder="Введите текст"
                value={search}
                onChangeText={setSearch}
                style={styles.input}
            />
            <Text style={styles.previewText}>{search}</Text>

            <Text style={{ marginTop: 15 }}>Submit</Text>
            <TextInput
                placeholder="Введите значение и нажмите"
                value={submittedValue}
                onChangeText={setSubmittedValue}
                style={styles.input}
            />
            <Button
                title="Показать текст"
                onPress={() => alert(submittedValue)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10
    },
    previewText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    }
});
