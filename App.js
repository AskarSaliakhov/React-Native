import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ButtonDemo from './screens/ButtonDemo';
import TextInputDemo from './screens/TextInputDemo';
import LoginForm from './screens/LoginForm';
import CustomBox from './components/CustomBox';
import Divider from './components/Divider';

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ButtonDemo />
            <Divider />
            <TextInputDemo />
            <Divider />
            <LoginForm />
            <Divider />
            <View style={styles.boxContainer}>
                <CustomBox color="red" width={100} height={100} />
                <CustomBox color="green" width={120} height={80} />
                <CustomBox color="blue" width={80} height={120} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    boxContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
});
