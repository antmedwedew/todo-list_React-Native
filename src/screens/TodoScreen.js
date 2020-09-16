import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { AppCard } from '../components/ui/AppCard'
import { THEME } from '../theme'

export const TodoScreen = ({ goBack, todo }) => {
    return (
      <View>
        <AppCard>
          <Text style={styles.title}>{todo.title}</Text>
          <View style={styles.cardButton}>
            <Button title='Редактировать'/>
          </View>
        </AppCard>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Назад' color={THEME.GREY_COLOR} onPress={goBack}/>
          </View>
          <View style={styles.button}>
            <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={() => {}}/> 
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