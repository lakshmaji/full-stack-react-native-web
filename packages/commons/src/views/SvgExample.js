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
import { useNavigation } from '../hooks/use-navigation';
import { ROUTES } from '../const/Routes';

const SvgExample = ({ theme }) => {

    const { navigateTo } = useNavigation();

    const navigateToDashboard = () => navigateTo(ROUTES.DASHBOARD)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.containerStyles}>
                <List.Section title="Gallery">
                    <View style={styles.row}>
                        <Button mode="outlined" onPress={navigateToDashboard} style={styles.button}>
                            Back
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