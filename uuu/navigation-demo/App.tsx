import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {PageName} from "./constants/PageName";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style = 'dark'/>
            {/* NavigationContainer should be wrapped around all components in your app. */}
            <NavigationContainer>
                <Stack.Navigator>
                    {/* Screen component is a component that allow us to register a screen that will be managed by this navigator */}
                    <Stack.Screen name = {PageName.CATEGORIES} component = {CategoriesScreen}/>
                    <Stack.Screen name = {PageName.MEALS_OVERVIEW} component = {MealsOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
