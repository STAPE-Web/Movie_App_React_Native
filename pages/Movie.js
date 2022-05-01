import React from 'react'
import { SafeAreaView, StyleSheet, View, Image, Text, Button } from 'react-native'
import { Background } from '../components/Background'
import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { H1 } from '../components/markup/H1'
import { video } from '../Objects'
import { Video } from 'expo-av';
import { P } from '../components/markup/P'


export const Movie = ({ navigation }) => {

    return (
        <SafeAreaView>
            <Header navigation={navigation}>
                <H1>{video.title}</H1>
            </Header>
            <View style={styles.content}>
                <View style={styles.rate}>
                    <Image style={styles.iconStar} source={require('../assets/icons/Star.svg')} />
                    <Text style={styles.rateText}>{video.star}</Text>
                </View>
                <Video
                    style={styles.video}
                    source={video.video}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                />
                <P>{video.description}</P>
            </View>
            <Nav navigation={navigation} />
            <Background />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
        width: '85%',
        margin: 'auto',
        paddingBottom: 100
    },
    top: {
        flex: 1,
        flexDirection: 'row'
    },
    rate: {
        flex: 1,
        flexDirection: 'row',
        gap: 10
    },
    iconStar: {
        width: 35,
        height: 35
    },
    rateText: {
        fontSize: 24,
        color: '#FAC945',
        fontFamily: 'McLaren_400Regular',
    },
    video: {
        marginVertical: 30,
        borderRadius: 10
    }
})