import React from 'react'
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'

export const Nav = ({ navigation }) => {

    const NavigationHome = () => {
        navigation.navigate('Home')
    }
    const NavigationExplore = () => {
        navigation.navigate('Explore')
    }
    const NavigationPremium = () => {
        navigation.navigate('Premium')
    }
    const NavigationProfile = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.nav}>
            <TouchableHighlight onPress={NavigationHome} underlayColor="transparent">
                <Image style={styles.icon} source={require('../assets/icons/Home.svg')} />
            </TouchableHighlight>
            <TouchableHighlight onPress={NavigationExplore} underlayColor="transparent">
                <Image style={styles.icon} source={require('../assets/icons/Explore.svg')} />
            </TouchableHighlight>
            <TouchableHighlight onPress={NavigationPremium} underlayColor="transparent">
                <Image style={styles.icon} source={require('../assets/icons/Premium.svg')} />
            </TouchableHighlight>
            <TouchableHighlight onPress={NavigationProfile} underlayColor="transparent">
                <Image style={styles.icon} source={require('../assets/icons/User.svg')} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: 80,
        backgroundColor: 'rgba(30, 30, 42, 0.8)',
        backdropFilter: 'blur(8px)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    icon: {
        width: 30,
        height: 30,
    }
})