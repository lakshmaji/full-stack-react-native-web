/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import Autocode from '../../logos/autocode.svg';
import Bower from '../../logos/bower.svg';
import Composer from '../../logos/composer.svg';
import Drupal from '../../logos/drupal.svg';
import Egghead from '../../logos/egghead.svg';
import Ember from '../../logos/ember.svg';
import Firefox from '../../logos/firefox.svg';
import Hostgator from '../../logos/hostgator.svg';
import Pug from '../../logos/pug.svg';
import ReduxObservable from '../../logos/redux-observable.svg';
import RubyMine from '../../logos/rubymine.svg';
import Snyk from '../../logos/snyk.svg';
import Stylelint from '../../logos/stylelint.svg';
import Address from "../../logos/address.svg";
import Success from "../../logos/success.svg";
import { Button, List, withTheme, Theme } from 'react-native-paper';

const SvgExample = ({ theme }) => {
    const title = 'Button'
    const { colors } = theme;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.containerStyles}>
                <List.Section title="Text button">
                    <View style={styles.row}>
                        <Button onPress={() => { }} style={styles.button}>
                            Default
            </Button>
                        <Button
                            color={colors.accent}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Custom
            </Button>
                        <Button disabled onPress={() => { }} style={styles.button}>
                            Disabled
            </Button>
                        <Button icon="camera" onPress={() => { }} style={styles.button}>
                            Icon
            </Button>
                        <Button loading onPress={() => { }} style={styles.button}>
                            Loading
            </Button>
                    </View>
                </List.Section>
                <List.Section title="Outlined button">
                    <View style={styles.row}>
                        <Button mode="outlined" onPress={() => { }} style={styles.button}>
                            Default
            </Button>
                        <Button
                            mode="outlined"
                            color={colors.accent}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Custom
            </Button>
                        <Button
                            mode="outlined"
                            disabled
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Disabled
            </Button>
                        <Button
                            mode="outlined"
                            icon="camera"
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Icon
            </Button>
                        <Button
                            mode="outlined"
                            loading
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Loading
            </Button>
                        <Button
                            mode="outlined"
                            onPress={() => { }}
                            style={styles.button}
                            labelStyle={{
                                fontWeight: '800',
                                fontSize: 18,
                            }}
                        >
                            Custom Font
            </Button>
                    </View>
                </List.Section>
                <List.Section title="Contained button">
                    <View style={styles.row}>
                        <Button mode="contained" onPress={() => { }} style={styles.button}>
                            Default
            </Button>
                        <Button
                            mode="contained"
                            color={colors.accent}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Custom
            </Button>
                        <Button
                            mode="contained"
                            disabled
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Disabled
            </Button>
                        <Button
                            mode="contained"
                            icon="camera"
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Icon
            </Button>
                        <Button
                            mode="contained"
                            loading
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Loading
            </Button>
                    </View>
                </List.Section>
                <List.Section title="Custom icon">
                    <View style={styles.row}>
                        <Button
                            mode="outlined"
                            icon={{
                                uri:
                                    'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
                            }}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Remote image
            </Button>
                        <Button
                            mode="outlined"
                            icon={require('../../images/favorite.png')}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Required asset
            </Button>
                        <Button
                            mode="outlined"
                            icon={({ size }) => (
                                <Image
                                    source={require('../../images/chameleon.png')}
                                    style={{ width: size, height: size, borderRadius: size / 2 }}
                                />
                            )}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Custom component
            </Button>
                    </View>
                </List.Section>
                <Bower style={styles.logo} />
                <Snyk style={styles.logo} />
                <Drupal style={styles.logo} />
                <Composer style={styles.logo} />
                <Ember style={styles.logo} />
                <Autocode style={styles.logo} />
                <Egghead style={styles.logo} />
                <Hostgator style={styles.logo} />
                <Pug style={styles.logo} />
                <Stylelint style={styles.logo} />
                <ReduxObservable style={styles.logo} />
                <RubyMine style={styles.logo} />
                <Firefox style={styles.logo} />
                <Address style={{
                    backgroundColor: "#844685",
                    color: "white",
                    alignSelf: "center"
                }} />
                <Success style={{
                    backgroundColor: "#844685",
                    color: "white",
                    alignSelf: "center"
                }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = {
    logo: {
        marginTop: 20,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#efefef',
    },
    scrollView: {
        width: '100%',
    },
    containerStyles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export default withTheme(SvgExample);