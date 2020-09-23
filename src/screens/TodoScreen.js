import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { AppCard } from '../components/ui/AppCard'
import { THEME } from '../theme'
import { EditModal } from '../components/EditModal'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {

  const [modal, setModal] = useState(false)

  const saveHandler = title => {
    onSave(todo.id, title)
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
          <AppButton color={THEME.GREY_COLOR} onPress={goBack}>Назад</AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}>Удалить</AppButton> 
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
    width: '35%'
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