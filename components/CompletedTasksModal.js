import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { observer } from 'mobx-react-lite';
import itemStore from "../src/store/ItemStore";
import { Colors } from '../src/styles/Colors';
import {useTheme} from "../src/modules/theme/ThemeProvider";

const CompletedTasksModal = observer(({ modalizeRef }) => {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        modalContent: {
            padding: 16,
        },
        modalTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 16,
            color: Colors.textPrimary[theme],
        },
        completedItem: {
            marginBottom: 10,
            padding: 10,
            backgroundColor: Colors.textSecondary[theme],
            borderRadius: 5,
        },
    });

    return (
        <Modalize
            ref={modalizeRef}
            snapPoint={400}
            modalHeight={500}
        >
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>
                    Завершенные задачи
                </Text>
                <ScrollView>
                    {itemStore.completedItems.map((completedItem) => (
                        <View
                            key={completedItem.id}
                            style={styles.completedItem}
                        >
                            <Text style={{ color: Colors.textPrimary[theme] }}>
                                {completedItem.title}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </Modalize>
    );
});

export default CompletedTasksModal;
