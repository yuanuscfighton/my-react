import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {PageName} from "./constants/PageName";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {useCallback, useEffect, useRef} from "react";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

const isClickValid = useRef(true);
const onButtonClick = () => {
    if (isClickValid.current) {
        isClickValid.current = false;
        // alert("点击了按钮");
        // todo:yuanmengdi 测试log，最后删除
        console.log("====>>> 123,", Date.now());
        const duplicatedClickTimer = setTimeout(() => {
            isClickValid.current = true;
            clearTimeout(duplicatedClickTimer);
        }, 1000);
    }
};

export default function App() {
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={onButtonClick}>
                <Text>按钮</Text>
            </TouchableOpacity>
            {/*<StatusBar style = 'dark'/>*/}
            {/* NavigationContainer should be wrapped around all components in your app. */}
            {/*<NavigationContainer>*/}
            {/*    <Stack.Navigator>*/}
            {/*        /!* Screen component is a component that allow us to register a screen that will be managed by this navigator *!/*/}
            {/*        <Stack.Screen name = {PageName.CATEGORIES} component = {CategoriesScreen}/>*/}
            {/*        <Stack.Screen name = {PageName.MEALS_OVERVIEW} component = {MealsOverviewScreen}/>*/}
            {/*    </Stack.Navigator>*/}
            {/*</NavigationContainer>*/}
        </View>
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
