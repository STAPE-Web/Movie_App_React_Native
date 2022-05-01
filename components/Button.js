import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Button = ({ background, children }) => {
    return (
        <View style={[styles.button, background]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
})