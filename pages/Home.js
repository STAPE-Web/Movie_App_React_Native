import React from 'react'
import { Text, StyleSheet, View, Image, TextInput, SafeAreaView } from 'react-native'
import { Background } from '../components/Background';
import { Header } from '../components/Header';
import { H2 } from '../components/markup/H2';
import { P } from '../components/markup/P';
import { Movie } from '../components/Movie';
import { Nav } from '../components/Nav';
import { Search } from '../components/Search';
import { movie, profile } from '../Objects';

export default function Home({ navigation }) {

    return (
        <SafeAreaView style={styles.body}>
            <Header navigation={navigation}>
                <View>
                    <H2>Hello {profile.login}!</H2>
                    <Text style={styles.pHeader}>Choose a movie for today</Text>
                </View>
            </Header>
            <Search />
            <View style={styles.content}>
                <P>Popular Movies</P>
                {movie.map((movie) => <Movie post={movie} key={movie.id} navigation={navigation} />)}
            </View>
            <Nav navigation={navigation} />
            <Background />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
        boxSixing: 'border-box',
    },
    pHeader: {
        fontSize: 18,
        fontFamily: 'McLaren_400Regular',
        color: '#727272'
    },
    content: {
        width: '85%',
        margin: 'auto',
        paddingBottom: 100
    },
});