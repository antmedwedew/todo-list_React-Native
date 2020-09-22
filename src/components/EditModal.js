import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal, Alert } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCancel, value, onSave }) => {

  const [title, setTitle] = useState(value)

  const saveHandler = ()=> {
    if (title.trim() == 0) {
      Alert.alert('Ошибка!', 'Строка не может быть пустой!')
    } else {
      onSave(title)
    }
  }

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.wrapp}>
        <TextInput 
          style={styles.input} 
          placeholder='Введите новое название' 
          value={title}
          onChangeText={setTitle}
        />
        
        <View style={styles.buttons}>
          <Button title="Отменить" onPress={onCancel} color={THEME.DANGER_COLOR}/>
          <Button title="Сохранить" onPress={saveHandler} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%'
  },
  buttons: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})