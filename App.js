import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {

  const [todos, setTodos] = useState([{id: '1', title: 'setting page'}])
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
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = (
    <MainScreen 
      todos={todos} 
      removeTodo={removeTodo} 
      addTodo={addTodo} 
      openTodo={id => {setTodoId(id)}} 
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo}/>
  }

  return (
    <View>
      <Navbar />

      <View style={styles.container}> 
        { content }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20
  }
});
