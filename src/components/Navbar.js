import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from '../theme'
import { AppTextBold } from './ui/AppTextBold'

export const Navbar = (props)=> {
	return (
		<View style={styles.navbar}>
			<AppTextBold style={styles.text}>Создай задачу</AppTextBold>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 70,
		backgroundColor: THEME.MAIN_COLOR,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: '#fff',
		fontSize: 20,
		fontFamily: 'roboto-bold'
	}
})