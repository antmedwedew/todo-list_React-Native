import React from 'react'
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCancel }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={false}>
      <View style={styles.wrap}>
        <TextInput style={styles.input} placeholder="Введите назание" />
        <View style={styles.buttons}>
          <Button title="Отменить" onPress={onCancel} color={THEME.DANGER_COLOR} />
          <Button title="Сохранить" />
        </View>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
    fontSize: 18,
  },
  buttons: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'

  }
})