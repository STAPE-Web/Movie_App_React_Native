import React from 'react'
import { SafeAreaView, View, StyleSheet, FlatList, Text } from 'react-native'
import { Background } from '../components/Background'
import { H1 } from '../components/markup/H1'
import { H2 } from '../components/markup/H2'
import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Box } from '../components/Box'
import { Button } from '../components/Button'

export const Premium = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation}>
                <H1>Premium</H1>
            </Header>
            <View style={styles.content}>
                <Box>
                    <Text style={styles.text}>Buy Premium</Text>
                    <View style={styles.left}>
                        <H2>What will you get</H2>
                        <FlatList
                            data={[
                                { id: 1, key: 'More movies' },
                                { id: 2, key: 'More functions' },
                                { id: 3, key: 'Possibility to rate films' },
                                { id: 4, key: 'Possibility to upload movies' }
                            ]}
                            renderItem={({ item }) => <Text style={styles.item}>{item.id}. {item.key}</Text>}
                        />
                    </View>
                    <Button background={styles.background}>
                        <Text style={styles.textButton}>Buy $5/month</Text>
                    </Button>
                </Box>
            </View>
            <Nav navigation={navigation} />
            <Background />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    content: {
        width: '85%',
        margin: 'auto',
        paddingBottom: 100
    },
    background: {
        backgroundColor: '#1E1E2A',
        width: '80%',
        margin: 'auto'
    },
    text: {
        fontFamily: 'McLaren_400Regular',
        color: '#BAB586',
        fontSize: 36
    },
    left: {
        textAlign: 'left',
        marginVertical: 20,
    },
    item: {
        fontFamily: 'McLaren_400Regular',
        color: '#9A9A9A',
        fontSize: 18
    },
    textButton: {
        color: '#fff',
        fontFamily: 'McLaren_400Regular',
        fontSize: 18
    }
})