import {CATEGORIES} from "../data/dummy-data";
import {FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import React from "react";
import {PageName} from "../constants/PageName";

export default function CategoriesScreen({navigation}) {

    function renderCategoryItem({item, index}) {
        function handlePress() {
            navigation.navigate(PageName.MEALS_OVERVIEW, {
                categoryId: item.id,
            });
        }

        return <CategoryGridTile title = {item.title} color = {item.color} onPress = {handlePress}/>
    }

    return <FlatList
        keyExtractor = {(item) => item.id}
        data = {CATEGORIES}
        numColumns = {2}
        renderItem = {renderCategoryItem}
    />
}