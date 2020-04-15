/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Button, withTheme, TextInput } from 'react-native-paper';
// import { useNavigation } from '../hooks/use-navigation'
import { useNavigation } from '@lakshmaji/navigation';
import { ROUTES } from '../const/Routes'
import { useDispatch } from 'react-redux'
import userActions from '../state/User/actions'

const Login = ({ theme }) => {
    const { navigateTo } = useNavigation();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: 'lakshmaji@gmail.com',
        password: 'Master@123'
    });

    const onChangeText = (key, value) =>
        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));


    const navigateToRegister = () => navigateTo(ROUTES.REGISTER)

    const doLogin = () => {
        dispatch(userActions.login(formData))
    }

    return (
        <KeyboardAvoidingView
            style={styles.wrapper}
            behavior="padding"
            keyboardVerticalOffset={80}
        >
            <ScrollView
                style={[styles.container, { backgroundColor: theme.colors.background }]}
                keyboardShouldPersistTaps={'always'}
                removeClippedSubviews={false}
            >
                <TextInput
                    mode="outlined"
                    style={styles.inputContainerStyle}
                    label="Email"
                    placeholder="Type something"
                    value={formData.email}
                    onChangeText={text => onChangeText('email', text)}
                />


                <TextInput
                    mode="outlined"
                    style={styles.inputContainerStyle}
                    label="Password"
                    placeholder="Type something"
                    secureTextEntry
                    onChangeText={text => onChangeText('password', text)}
                    value={formData.email}
                />


                <View style={styles.row}>
                    <Button mode="contained" onPress={doLogin} style={[styles.button, styles.inputContainerStyle]}>
                        Login
                    </Button>

                </View>
                <View style={styles.row}>
                    <Button onPress={navigateToRegister} style={styles.button}>
                        Register
                    </Button>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    row: {

    },
    wrapper: {
        flex: 1,
    },
    counterHelper: {
        textAlign: 'right',
    },
    inputContainerStyle: {
        margin: 8,
    },
    fontSize: {
        fontSize: 24,
    },
    textArea: {
        height: 80,
    },
    button: {

    }
});

export default withTheme(Login);