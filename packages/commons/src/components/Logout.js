
import React, { useEffect } from "react";
import { StyleSheet, View } from 'react-native'
import { useDispatch } from "react-redux";
import { withTheme, Button } from 'react-native-paper'
import userActions from "../state/User/actions";

const Logout = () => {
    const dispatch = useDispatch();


    const _doLogout = () => {
        dispatch(userActions.logout())
    }

    return <Button mode="contained" onPress={_doLogout} style={[styles.button, styles.inputContainerStyle]}>
        Logout
    </Button>
}

const styles = StyleSheet.create({
    inputContainerStyle: {
        margin: 8,
    },
    button: {

    }
});

export default withTheme(Logout)
