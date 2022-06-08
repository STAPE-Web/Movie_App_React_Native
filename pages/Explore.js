import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { Background } from '../components/Background'
import { H1 } from '../components/markup/H1'
import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { Filter } from '../components/Filter'
import { Movie } from '../components/Movie'
import { movie } from '../Objects'

export const Explore = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation}>
                <H1>Explore</H1>
            </Header>
            <Search />
            <Filter />
            <View style={styles.content}>
                {movie.map((movie) => <Movie post={movie} key={movie.id} navigation={navigation} />)}
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
})
