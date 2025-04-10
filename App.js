import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeaderSection from './components/HeaderSection';
import ImageCard from './components/ImageCard';
import HorizontalScroll from './components/HorizontalScroll';
import VerticalScroll from './components/VerticalScroll';
import LimitedScroll from './components/LimitedScroll';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <HeaderSection
                title="Пример 1"
                body="Шапка"
            />
            <ImageCard
                title="Пример 2"
                image={require('./assets/images/forest1.jpg')}
                caption="Красивый лес"
            />
            <HorizontalScroll />
            <VerticalScroll />
            <LimitedScroll />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
});
