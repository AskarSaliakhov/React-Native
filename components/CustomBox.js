import React from 'react';
import { View } from 'react-native';

export default function CustomBox({ color, width, height, borderRadius = 10 }) {
    return (
        <View style={{
            width,
            height,
            backgroundColor: color,
            marginVertical: 10,
            borderRadius
        }} />
    );
}
