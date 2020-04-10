import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "../hooks/use-navigation";
import { ROUTES } from "../const/Routes";
import { Button, withTheme } from "react-native-paper";
import { useDispatch } from "react-redux";

const Dashboard = () => {
    const {
        navigateTo,
        getState,
        getStateByKey,
        routeDetails,
        isWeb,
        getRouteParam,
        getQueryParam,
        getQueryParams,
        getRouteParams
    } = useNavigation();

    useEffect(() => {
        console.log('Dashboard component mounted')
    })

    console.log('bello outputs from Dashboard isWeb:::::::::::', isWeb)
    console.log('bello outputs from Dashboard routeDetails:::::::::::', routeDetails)
    console.log('bello outputs from Dashboard getState:::::::::::', getState)
    console.log('bello outputs from Dashboard getStateByKey:::::::::::', getStateByKey('stateParamOne'))
    console.log('bello outputs from Dashboard getRouteParams:::::::::::', getRouteParams)
    console.log('bello outputs from Dashboard getRouteParam:::::::::::', getRouteParam('userId'), getRouteParam('themeMode'))
    console.log('bello outputs from Dashboard getQueryParam:::::::::::', getQueryParam('filterName'), getQueryParam('filterAge'))
    console.log('bello outputs from Dashboard getQueryParams:::::::::::', getQueryParams)

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(userActions.fetchAccountDetails());
    }, [])
    const raiseError = () => {
        throw new Error('Error text');
    }

    const navigateToPosts = () => navigateTo(ROUTES.POSTS);
    return <View>
        <Text> Dashboard</Text>
        <Button mode="contained" onPress={navigateToPosts} style={[styles.button, styles.inputContainerStyle]}>
            List Posts
        </Button>

    </View>
};

const styles = StyleSheet.create({
    inputContainerStyle: {
        margin: 8,
    },
    button: {

    }
});

export default withTheme(Dashboard);
