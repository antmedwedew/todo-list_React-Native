import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ onAddTodo }) => {

    const [value, setValue] = useState('')

    const pressHandler = ()=> {
        if (!value.trim()) {
            Alert.alert('Название дела не может быть пустым!')
            return
        }
        onAddTodo(value)
        setValue('')
    }

    return (
        <View style={styles.AddTodo}>
            <TextInput 
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder='Введите название задачи'
            />
            <Button 
                title='Добавить'
                onPress={pressHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    AddTodo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    },
    input: {
        width: '75%',
        borderBottomWidth: 2,
        borderColor: '#000',
        borderStyle: 'solid',
        marginRight: 10,
        fontSize: 18,
        paddingHorizontal: 5
    }
})