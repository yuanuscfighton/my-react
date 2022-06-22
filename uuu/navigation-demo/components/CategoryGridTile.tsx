import {Pressable, View, Text, StyleSheet, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function CategoryGridTile({title, color, onPress}) {

    const navigation = useNavigation();

    return <View style = {styles.gridItem}>
        <Pressable
            android_ripple = {{color: '#CCC'}}
            style = {({pressed}) => [
                styles.button,
                pressed ? styles.buttonPressed : null
            ]}
            onPress = {onPress}
        >
            <View style = {[styles.innerContainer, {backgroundColor: color}]}>
                <Text style = {styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
