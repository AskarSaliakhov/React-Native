import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './screens/Home';
import News from './screens/News';
import Chat from './screens/Chat';
import Settings from './screens/Settings';
import HomeAbout from './screens/HomeAbout';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarStyle: { height: 60, paddingBottom: 10 },
                    tabBarLabelStyle: { fontSize: 14 },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={({ navigation }) => ({
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home-outline"
                                size={size}
                                color={color}
                            />
                        ),
                        headerTitle: 'Главная',
                        headerRight: () => (
                            <Ionicons
                                name="information-circle-outline"
                                size={24}
                                color="black"
                                style={{ marginRight: 10 }}
                                onPress={() => {
                                    navigation.navigate('HomeAbout');
                                }}
                            />
                        ),
                        headerTitleAlign: 'center',
                    })}
                />
                <Tab.Screen
                    name="News"
                    component={News}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="newspaper-outline"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="chatbubble-outline"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="settings-outline"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
