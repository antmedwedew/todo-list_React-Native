import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../theme';
import { AppText } from '../components/ui/AppText'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {

  const [deviceHeight, setDeviceHeight] = useState(Dimensions.get('window').height / 1.5)

  // Render update component icon center
  useEffect(() => {
    const update = () => {
      const height = Dimensions.get('window').height / 1.5
      setDeviceHeight(height)
    }

    Dimensions.addEventListener('change', update)

    return () => {
      Dimensions.removeEventListener('change', update)
    }

  })
  //--------------

  let content = (
    <View>
      <FlatList
        keyExtractor={item => item.id.toString()} 
        data={todos}
        renderItem={({ item })=> (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>)}
      />
    </View>
  )

  if (todos.length === 0) {
    content = (
      <View style={styles.iconWrapp} height={deviceHeight}>
        <MaterialCommunityIcons name="format-list-bulleted" size={50} color={THEME.GREY_COLOR} />
        <AppText color={THEME.GREY_COLOR}>Список пуст</AppText>
      </View>
    )
  }

  return (
    <View>
      <AddTodo onAddTodo={addTodo} />

      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  iconWrapp: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})