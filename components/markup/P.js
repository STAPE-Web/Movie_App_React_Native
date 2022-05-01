import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const P = ({ children }) => {
    return (
        <Text style={styles.p}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    p: {
        fontSize: 18,
        fontFamily: 'McLaren_400Regular',
        color: '#fff'
    }
})