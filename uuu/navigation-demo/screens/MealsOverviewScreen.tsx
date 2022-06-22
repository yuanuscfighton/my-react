import {Text, View, StyleSheet, FlatList} from "react-native";
import {MEALS} from "../data/dummy-data";

export default function MealsOverviewScreen({navigation, route}) {

    const {categoryId} = route.params;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

    function renderMealItem({item, index}) {
        return (
            <View>
                <Text>{item.title}</Text>
            </View>
        )
    }

    return (
        <View style = {styles.container}>
            <FlatList
                keyExtractor = {(item) => item.id}
                data = {displayedMeals}
                renderItem = {renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
