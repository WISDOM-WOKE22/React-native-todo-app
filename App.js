import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard  } from 'react-native';

// Components
import { Header } from './components/header';
import TodoItem from './components/todoItem';
import { TextField } from './components/textInput';

export default function App() {
  const [ todo, setTodos ] = useState([])
  
  const pressHandler = (key) => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.key !== key)
    })
  }

  const handelChange = (val) => {
    if(!val){
      Alert.alert('OOPS!', "Input is empty", [
        { text:"Ok", onPress: () => console.log('Alright') }
      ])
    } else if(val.length > 3){
      setTodos( prevTodo => { 
        return [
          { item: val, key: Math.random().toString() },
          ...prevTodo
        ]  
      })
    } else{
      Alert.alert('OOPS!', 'Input must be more than 3 laters', [
        { text: 'Ok', onPress: () => console.log('Alert close') }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log('Test case')
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header/>
        <View>
          {/* Form Body */}
          <TextField handelChange={handelChange}/>
          <View>
            {/* TODO LIST */}
            <View>  
              <FlatList
                style={styles.todoList}
                data={todo}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler}/>
                  )}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  todoList:{
    padding: 10
  }
});
