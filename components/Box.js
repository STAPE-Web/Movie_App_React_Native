import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Box = ({ children }) => {
    return (
        <View style={styles.box}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        padding: 30,
        backgroundColor: 'rgba(53, 53, 64, 0.5)',
        shadowColor: '#000',
        shadowRadius: 30,
        shadowOpacity: '0.25',
        borderRadius: 30,
        textAlign: 'center'
    }
})