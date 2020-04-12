import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../const/Routes';
import { useNavigation } from './use-navigation';

const canIgnoreRoute = (pathname) => {

    const IGNORE_PATHS = ['/login', '/register', 'AuthCheck', 'Login']
    if (IGNORE_PATHS.includes(pathname)) {
        return true;
    }
    return false;
}

export const useAuthCheck = () => {
    const { navigateTo, isWeb, routeDetails, getStateByKey } = useNavigation();
    const { token } = useSelector(state => state.user);


    // const gotoDashboardWithparams = () => {
    //     navigateTo(
    //         ROUTES.DASHBOARD_WITH_PARAM,
    //         {
    //             userId: '10k61A0570',
    //             themeMode: 'green',
    //             stateParamOne: 'this is to check state params'
    //         },
    //         {
    //             filterName: 'vi',
    //             filterAge: 12,
    //             locations: ['Kanipakam', 'Tirupati', 'Vijayawada', 'Sri Sailam', 'En-ksdg876'],
    //             status: 'active'
    //         }
    //     );
    // }

    useEffect(() => {

        if (token) {

            const returnUrl = getStateByKey('returnUrl');
            if (returnUrl) {
                console.log('returnUrl', returnUrl);

                const { pathname, state, search, params } = returnUrl;
                if (!canIgnoreRoute(pathname)) {

                    navigateTo(pathname, { ...state, ...params }, search);
                } else {
                    navigateTo(ROUTES.DASHBOARD)
                }
            } else if (routeDetails) {
                const { pathname, state, search, params } = routeDetails;
                console.log('routeDetails', routeDetails);
                if (!canIgnoreRoute(pathname)) {

                    navigateTo(pathname, { ...state, ...params }, search);
                } else {
                    navigateTo(ROUTES.DASHBOARD)
                }
            } else {
                navigateTo(ROUTES.DASHBOARD);
            }
        } else {
            if (routeDetails) {
                navigateTo(ROUTES.LOGIN, {
                    returnUrl: routeDetails
                })
            } else {
                navigateTo(ROUTES.LOGIN);
            }
        }
    }, [token])
};