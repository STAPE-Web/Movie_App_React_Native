import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const H2 = ({ children }) => {
    return (
        <Text style={styles.h2}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    h2: {
        fontSize: 24,
        fontFamily: 'McLaren_400Regular',
        color: '#fff'
    }
})