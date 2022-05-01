import React from 'react'
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'
import { H2 } from './markup/H2'

export const Movie = (props) => {

    const NavigationMovie = () => {
        props.navigation.navigate('Movie')
    }

    return (
        <TouchableHighlight onPress={NavigationMovie} underlayColor="transparent">
            <View style={styles.card}>
                <Image style={styles.movie} source={props.post.preview} />
                <View style={styles.info}>
                    <H2>{props.post.title}</H2>
                    <View style={styles.rate}>
                        <Image style={styles.iconStar} source={require('../assets/icons/Star.svg')} />
                        <Text style={styles.rateText}>{props.post.rate}</Text>
                    </View>
                    <Text style={styles.watchTime}>Watch time: {props.post.time}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    iconStar: {
        width: 25,
        height: 25
    },
    rateText: {
        fontSize: 18,
        color: '#FAC945',
        fontFamily: 'McLaren_400Regular',
    },
    watchTime: {
        fontSize: 18,
        fontFamily: 'McLaren_400Regular',
        color: '#9B9B9B'
    },
    card: {
        backgroundColor: 'rgba(53, 53, 64, 0.5)',
        borderRadius: 30,
        flex: 1,
        marginTop: 20
    },
    movie: {
        resizeMode: "cover",
        width: '100%',
        height: 200,
        borderRadius: 30
    },
    info: {
        padding: 20,
        flex: 1,
        gap: 7
    },
    rate: {
        flex: 1,
        flexDirection: 'row',
        gap: 10
    }
})