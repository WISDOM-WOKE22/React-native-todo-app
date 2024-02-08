import { useState } from "react"
import { StyleSheet, View, Text, TextInput,TouchableOpacity, Button } from "react-native"

export const TextField = ({ handelChange }) => {

    const [ text, setText ] = useState('')

    const handlePress = () => {
        handelChange(text)
        setText('')
    }

    return (
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Enter todo..." onChangeText={val => setText(val)} value={text}/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text onPress={() => handlePress()} style={styles.button}>Add</Text>
            </TouchableOpacity>
          </View>
          </View>
    )
}

const styles = StyleSheet.create({
    formContainer:{
        marginTop:20,
        padding:10,
        display: 'flex',
        flexDirection: 'column'
      },
      input:{
        borderColor: 'gray',
        borderBottomWidth:1,
        height: 40,
        borderRadius: 10,
        padding: 6
      },
      buttonContainer:{
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      button:{
        backgroundColor:'#34b34f',
        width: 300,
        padding: 15,
        textAlign:'center',
        color: '#fff',
        borderRadius: 20,
      },
})