import React from 'react'
import { SafeAreaView, View, StyleSheet, FlatList, Text, Image } from 'react-native'
import { Background } from '../components/Background'
import { H1 } from '../components/markup/H1'
import { Nav } from '../components/Nav'
import { Header } from '../components/Header'
import { Box } from '../components/Box'
import { Button } from '../components/Button'
import { profile } from '../Objects'

export const Profile = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation}>
                <H1>{profile.login}</H1>
            </Header>
            <View style={styles.content}>
                <View>
                    <Image resizeMode='contain' style={styles.logo} source={require('../assets/images/Logo.svg')} />
                </View>
                <Box>
                    <H1>Information</H1>
                    <View style={styles.left}>
                        <FlatList
                            data={[
                                { key: 'Login', info: profile.login },
                                { key: 'Email', info: profile.email },
                                { key: 'Password', info: profile.password },
                            ]}
                            renderItem={({ item }) => <Text style={styles.item}>{item.key}: {item.info}</Text>}
                        />
                    </View>
                    <View style={styles.btns}>
                        <Button background={styles.background}>
                            <Image style={styles.iconEdit} source={require('../assets/icons/Edit.svg')} />
                        </Button>
                        <Button background={styles.backgroundRed}>
                            <Image style={styles.iconDelete} source={require('../assets/icons/Delete.svg')} />
                        </Button>
                    </View>
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
    },
    backgroundRed: {
        backgroundColor: '#6D2626',
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
    },
    logo: {
        width: '100%',
        height: 300,
        marginBottom: 20
    },
    btns: {
        flex: 1,
        flexDirection: 'row',
        gap: 20
    },
    iconEdit: {
        width: 18,
        height: 18
    },
    iconDelete: {
        width: 14,
        height: 18
    }
})