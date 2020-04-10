import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "../hooks/use-navigation";
import { ROUTES } from "../const/Routes";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import userActions from "../state/User/actions";
import { useAuthCheck } from '../hooks/use-auth-check'

export const Dashboard = () => {
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
    useAuthCheck()

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
    return <View>
        <Text>From Dashboard (mobile only)</Text>
        <Button onPress={() => navigateTo(ROUTES.ONBOARDING)}>Go to onboarding</Button>
        <Button onPress={() => raiseError()}>Raise Error</Button>
        <Icon name="rocket" size={30} color="#900" />
    </View>
};