import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'

export const Search = () => {
    return (
        <View style={styles.search}>
            <Image style={styles.iconSearch} source={require('../assets/icons/Search.svg')} />
            <View style={styles.hr}></View>
            <TextInput style={styles.input} placeholder='Search' placeholderTextColor='#BDBDC7' />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(53, 53, 64, 0.5)',
        shadowColor: '#000',
        shadowRadius: 30,
        shadowOpacity: '0.25',
        gap: 13,
        paddingHorizontal: 13,
        paddingVertical: 17,
        borderRadius: 15,
        width: '85%',
        margin: 'auto',
        marginVertical: 30
    },
    iconSearch: {
        width: 26,
        height: 26
    },
    input: {
        outlineStyle: 'none',
        color: '#BDBDC7',
        fontSize: 18,
        fontFamily: 'McLaren_400Regular',
        width: '100%'
    },
    hr: {
        width: 1,
        height: 24,
        backgroundColor: '#555'
    },
})