import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
// ICON
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TodoItem ({ item, pressHandler }) {
    return (
        <TouchableOpacity 
            style={styles.item}
            >
            <MaterialCommunityIcons
             size={20}
             name="delete" 
             color='gray'
             onPress={() => pressHandler(item.key)}
            />
            <Text style={styles.text}>{item.item}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        marginTop: 7,
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        marginLeft:5
    }
})