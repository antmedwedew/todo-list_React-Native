import React, {useState, useContext} from 'react';
import {Navbar} from "./components/Navbar";
import {View, StyleSheet, Alert} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {TodoContext} from "./context/todo/todoContext";

export const MainLayout = () => {
  const todoContext = useContext(TodoContext)
  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(null)

  const addTodo = (title)=> {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = id => {
    Alert.alert(
      'Удаление задачи',
      'Вы точно хотите удалить задачу?',
      [
        {
          text: 'Нет',
          style: 'cancel'
        },
        {
          text: 'Да',
          onPress: () => {
            setTodoId(null);
              setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        }
      ],
      { cancelable: false }
    );
  }

  const updateTodo = (id, title) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (
    <MainScreen
      todos={todoContext.todos}
      removeTodo={removeTodo}
      addTodo={addTodo}
      openTodo={id => {setTodoId(id)}}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen
      goBack={() => setTodoId(null)}
      todo={selectedTodo}
      onRemove={removeTodo}
      onSave={updateTodo}
    />
  }

  return (
    <View>
      <Navbar />

      <View style={styles.container}>
        { content }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20
  }
});

