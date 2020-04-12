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

    const navigateWithReplace = (pathname, state = {}, search = null) => {
        if (isWeb) {
            navigateTo(pathname, state, search, true);
        } else {
            navigateTo(pathname, state, search);
        }
    }

    const redirectBackTo = (locationDescriptor) => {
        const { pathname, state, search, params } = locationDescriptor;
        if (!canIgnoreRoute(pathname)) {

            navigateWithReplace(pathname, { ...state, ...params }, search);
        } else {
            navigateWithReplace(ROUTES.DASHBOARD)
        }
    }

    useEffect(() => {
        if (token) {
            const returnUrl = getStateByKey('returnUrl');
            if (returnUrl) {
                console.log('returnUrl', returnUrl);
                redirectBackTo(returnUrl)
            } else if (routeDetails) {
                console.log('routeDetails', routeDetails);
                redirectBackTo(routeDetails);
            } else {
                navigateWithReplace(ROUTES.DASHBOARD);
            }
        } else {
            navigateTo(ROUTES.LOGIN, {
                ...(routeDetails && { returnUrl: routeDetails })
            });
        }
    }, [token])
};