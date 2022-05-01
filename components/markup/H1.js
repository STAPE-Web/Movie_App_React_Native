import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const H1 = ({ children }) => {
    return (
        <Text style={styles.h1}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 36,
        fontFamily: 'McLaren_400Regular',
        color: '#fff'
    }
})