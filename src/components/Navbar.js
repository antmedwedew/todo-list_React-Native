import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { THEME } from '../theme'

export const Navbar = (props)=> {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Создай задачу</Text>
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
        fontSize: 20
    }
})