import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function ButtonDemo() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text style={styles.title}>Button</Text>
            <Button
                title={`Нажата ${count} раз`}
                onPress={() => setCount(prev => prev + 1)}
                disabled={count >= 3}
            />
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Сбросить"
                    onPress={() => setCount(0)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    }
});
