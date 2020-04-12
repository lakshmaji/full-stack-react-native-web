import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../const/Routes';
import { useNavigation } from './use-navigation';


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
        console.log(routeDetails);

        if (token) {
            const returnUrl = getStateByKey('returnUrl');
            if (returnUrl) {
                // if (isWeb) {
                //     const { pathname, state, search, params } = returnUrl;
                //     navigateTo(pathname, { ...state, ...params }, search);
                // } else {
                //     const { pathname, queryParams, params } = returnUrl;
                //     navigateTo(pathname, params, queryParams);
                // }
                const { pathname, state, search, params } = returnUrl;
                navigateTo(pathname, { ...state, ...params }, search);
            } else if (routeDetails) {
                const IGNORE_PATHS = ['/login']
                const { pathname, state, search, params } = routeDetails;
                if (!IGNORE_PATHS.includes(pathname)) {
                    navigateTo(pathname, { ...state, ...params }, search);
                } else {
                    navigateTo(ROUTES.DASHBOARD);
                }

            } else {
                navigateTo(ROUTES.DASHBOARD);
                // gotoDashboardWithparams()
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