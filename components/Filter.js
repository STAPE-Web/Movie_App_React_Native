import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const Filter = () => {

    const test = () => {
        console.log(123)
    }
    return (
        <View style={styles.filter}>
            <View style={styles.group}>
                <Image style={styles.iconFilter} source={require('../assets/icons/Filter.svg')} />
                <View style={styles.hr}></View>
                <Text style={styles.text}>Filter</Text>
            </View>
            <Image style={styles.iconDown} source={require('../assets/icons/Down.svg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    filter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(53, 53, 64, 0.5)',
        shadowColor: '#000',
        shadowRadius: 30,
        shadowOpacity: '0.25',
        paddingHorizontal: 13,
        paddingVertical: 17,
        borderRadius: 15,
        width: '85%',
        margin: 'auto',
    },
    group: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 13
    },
    iconFilter: {
        width: 26,
        height: 17
    },
    hr: {
        width: 1,
        height: 24,
        backgroundColor: '#555'
    },
    text: {
        color: '#BDBDC7',
        fontSize: 18,
        fontFamily: 'McLaren_400Regular',
    },
    iconDown: {
        width: 24,
        height: 14
    }
})