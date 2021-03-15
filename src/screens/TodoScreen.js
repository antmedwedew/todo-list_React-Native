import React, { useState, useContext } from 'react'
import { View, StyleSheet, Dimensions} from 'react-native'
import { AppCard } from '../components/ui/AppCard'
import { THEME } from '../theme'
import { EditModal } from '../components/EditModal'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContex'

export const TodoScreen = () => {
  const {todos ,updateTodo, removeTodo} = useContext(TodoContext);
  const {todoId, changeScreen} = useContext(ScreenContext);
  const [modal, setModal] = useState(false);

  const todo = todos.find(t => t.id === todoId)

  const saveHandler = title => {
    updateTodo(todo.id, title)
    setModal(false)
  }

  return (
    <View>
      <EditModal 
        value={todo.title} 
        visible={modal} 
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard>
        <AppText style={styles.title}>{todo.title}</AppText>
        <View style={styles.cardButton}>
          <AppButton onPress={() => setModal(true)}>Редактировать</AppButton>
        </View>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={() => changeScreen(null)}>Назад</AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)}>Удалить</AppButton> 
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  button: {
    width: Dimensions.get('window').width / 3
  },
  title: {
    fontSize: 20,
  },
  cardButton: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})