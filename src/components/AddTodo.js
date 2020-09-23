import React, {useState} from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native'
import { AppTextBold } from './ui/AppTextBold';

export const AddTodo = ({ onAddTodo }) => {

	const [value, setValue] = useState('')

	const pressHandler = ()=> {
		if (!value.trim()) {
			Alert.alert('Название дела не может быть пустым!')
			return
		}
		onAddTodo(value)
		setValue('')
		Keyboard.dismiss()
	}

	return (
		<View style={styles.AddTodo}>
			<TextInput 
				style={styles.input}
				onChangeText={text => setValue(text)}
				value={value}
				placeholder='Введите название задачи'
			/>
			<Entypo.Button name='plus' onPress={pressHandler}><AppTextBold style={styles.btnText}>Добавить</AppTextBold></Entypo.Button>
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
		width: '65%',
		borderBottomWidth: 2,
		borderColor: '#000',
		borderStyle: 'solid',
		marginRight: 10,
		fontSize: 16,
		paddingHorizontal: 5
	},
	btnText: {
		color: '#fff',
		fontSize: 16
	}
})