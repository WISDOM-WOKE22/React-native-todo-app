import { StyleSheet ,View, Text } from "react-native"

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={ styles.text }>My Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#34b34f',
        paddingTop: 60,
        paddingBottom:30
    },
    text:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '900',
        color: '#fff'
    }
})