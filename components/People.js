import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import accountStore from "../src/stores/AccountStore";

export const People = observer(() => {
    useEffect(() => {
        accountStore.fetchAccounts();
    }, []);

    if (accountStore.loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                />
            </View>
        );
    }

    if (accountStore.error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                    {accountStore.error}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={accountStore.accounts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.accountItem}>
                        <Text style={styles.accountName}>
                            {item.name}
                        </Text>
                        <Text style={styles.accountEmail}>
                            {item.email}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    accountItem: {
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        elevation: 2, // Для Android
        shadowColor: '#000', // Для iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    accountName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    accountEmail: {
        fontSize: 14,
        color: '#6c757d',
    },
});

