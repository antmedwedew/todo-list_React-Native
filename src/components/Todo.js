import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppText } from './ui/AppText'


export const Todo = ({ todo, onRemove, onOpen })=> {
  return (
    <TouchableOpacity 
      onLongPress={() => onRemove(todo.id)}
      onPress={() => onOpen(todo.id)}
    >
      <View style={styles.todo}>
        <AppText style={styles.todoText}>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
    marginBottom: 15,
    padding: 10
  },
    todoText: {
      fontSize: 18
    }
})