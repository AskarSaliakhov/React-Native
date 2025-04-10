import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function LoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        if (login === 'admin' && password === '1234') {
            setLoggedIn(true);
            setError('');
        } else {
            setError('Неверный логин или пароль');
        }
    };

    if (loggedIn) {
        return <Text style={styles.welcome}>Welcome!</Text>;
    }

    return (
        <View>
            <Text style={styles.title}>Форма входа</Text>
            <TextInput
                placeholder="Логин"
                value={login}
                onChangeText={setLogin}
                style={styles.input}
            />
            <TextInput
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button
                title="Войти"
                onPress={handleLogin}
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
        marginBottom: 10
    },
    error: {
        color: 'red',
        marginBottom: 10
    },
    welcome: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20
    }
});
