import React from 'react'
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native'

export const Header = ({ children, navigation }) => {

    const NavigationProfile = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.header}>
            {children}
            <TouchableHighlight onPress={NavigationProfile} underlayColor="transparent">
                <Image style={styles.logo} source={require('../assets/images/Logo.svg')} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        paddingVertical: 30,
        width: '85%',
        margin: 'auto'
    },
    logo: {
        width: 57,
        height: 57
    },
})
