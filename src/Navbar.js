import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
        backgroundColor: '#6c00d9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
})