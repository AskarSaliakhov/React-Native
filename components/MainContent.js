import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet,
    Alert,
} from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite';
import itemStore from "../src/store/ItemStore";
import { useTheme } from "../src/modules/theme/ThemeProvider";
import { Colors } from '../src/styles/Colors';
import CompletedTasksModal from './CompletedTasksModal';

const MainContent = observer(() => {
    const modalizeRef = useRef(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        itemStore.getItems();
    }, []);

    const openModalize = () => {
        modalizeRef.current?.open();
    };

    const confirmDelete = (id) => {
        Alert.alert(
            'Подтверждение',
            'Точно завершить?',
            [
                { text: 'Нет', style: 'cancel' },
                { text: 'Да', onPress: () => itemStore.completeTask(id) },
            ],
            { cancelable: true }
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            backgroundColor: Colors.backgroundPrimary[theme],
        },
        item: {
            marginBottom: 10,
            padding: 10,
            backgroundColor: Colors.buttonBackground[theme],
            borderRadius: 5,
        },
        text: {
            color: Colors.textPrimary[theme],
        },
    });

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Button
                    title={`Переключить тему (${theme === 'light' ? 'Тёмная' : 'Светлая'})`}
                    onPress={toggleTheme}
                    color={Colors.textPrimary[theme]}
                />
                <Button
                    title="Посмотреть завершенные задачи"
                    onPress={openModalize}
                    color={Colors.textPrimary[theme]}
                />

                <ScrollView>
                    {itemStore.items.map((item) => (
                        <View
                            key={item.id}
                            style={styles.item}
                        >
                            <Text style={styles.text}>
                                {item.title}
                            </Text>
                            <Button
                                title="Завершить"
                                onPress={() => confirmDelete(item.id)}
                                color={Colors.textPrimary[theme]}
                            />
                        </View>
                    ))}
                </ScrollView>

                <CompletedTasksModal modalizeRef={modalizeRef} />
            </View>
        </GestureHandlerRootView>
    );
});

export default MainContent;
