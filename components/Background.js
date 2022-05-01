import React from 'react'
import { Image, StyleSheet } from 'react-native'

export const Background = () => {
    return (
        <Image style={styles.background} source={require('../assets/images/Background.png')} />
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'fixed',
        zIndex: -1,
        width: '100%',
        height: '100vh'
    }
});