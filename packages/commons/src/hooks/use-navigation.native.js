import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation'
const isQueryParam = new RegExp('^qp_generic_mpra_')

const filterParams = (params = {}, removeQueryParams = false) => {
    return Object.keys(params).reduce((acc, key) => {
        if (removeQueryParams) {
            if (isQueryParam.test(key)) return acc;
            acc[key] = params[key];
        } else {
            if (!isQueryParam.test(key)) return acc;
            acc[key.replace(isQueryParam, '')] = params[key];
        }
        return acc;
    }, {});
}
const getStateAndParams = (data) => ({
    pathname: data.routeName,
    params: filterParams(data.params, true),
    search: filterParams(data.params),
    state: {}
});

export const useNavigation = () => {
    const { navigate, goBack, getParam, } = useContext(NavigationContext);
    const navCxt = useContext(NavigationContext);

    console.log('bello --------------------getParamgetParamgetParam ', navCxt)


    // Experiment One
    // const params = {userId: 213233, themeMode: 'light'}
    // const path = "/dashboard/:userId/theme/:themeMode"
    // const getEvaluatedString = (routePath, params ) => {
    //     return routePath.split('/').map(eStr => {
    //         if (eStr.indexOf(':') > -1) { 
    //             return params[eStr.substr(1)]
    //         }
    //         return eStr
    //     }).join('/')
    // }
    // getEvaluatedString(path, params)


    // Experminet two
    // params = { userId: 213233, themeMode: 'light' }
    // path = "/dashboard/:userId/theme/:themeMode"

    // Object.keys(params).reduce((acc, eParamKey) => {
    //     const regex = new RegExp(":" + eParamKey);
    //     const output = acc.replace(regex, params[eParamKey]);
    //     return output;
    // }, path);

    // Experminet three
    // params = { userId: 213233, themeMode: 'light' }
    // path = "/dashboard/:userId/theme/:themeMode"
    // Object.keys(params).reduce((acc, eParamKey) => {
    //     const regex = new RegExp(":" + eParamKey);
    //     const output = acc.replace(regex, "${" + eParamKey + "}");
    //     return output;
    // }, path);


    // navigateTo(
    //     url, // just a string-> a route name -> for reactjs web url will includes route-params
    //     state, // in case of react-native it is simply a screen route params and incase of react js it is simply state persay(will revisit this)
    //     queryParams // incasae of reactjs it is regular queryParams and in case of react native it will be trasted like a route params
    // )
    // NOTE: queryParams should be passed as object (not as string), this hook will handle rest for you

    // url -> string
    // screen route name -> string

    // route params (or) route state params -> object
    // screen state -> object

    // queryParams -> object
    // queryParams -> object later it will treated as state

    // Note: for every new navigator in the react-native based file , there should be a base / root component whcih should invoke `useAuthCheck` hook 
    // For web application this will not a case as thr root component will always be unique 
    const navigateTo = (url, state = {}, queryParams = null) => {
        console.log('bello navigate trigger ================', url, state, queryParams)
        // navigate(url, state);
        const params = {
            ...(state && { ...state }),
            ...(Object.keys(queryParams || {}).reduce((acc, eParam) => {
                return {
                    ...acc, [`qp_generic_mpra_${eParam}`]: queryParams[eParam]
                }
            }, {}))
        }

        navigate({
            routeName: url,
            params
        });

    };

    const navigateBack = () => {
        goBack();
    };

    return {
        navigateTo,
        navigateBack,
        getState: filterParams(navCxt.state.params, true),
        getStateByKey: (key) => getParam(key),
        routeDetails: getStateAndParams(navCxt.state),
        isWeb: false,
        getRouteParam: (key) => getParam(key),
        getRouteParams: filterParams(navCxt.state.params, true),
        getQueryParam: (key) => getParam(`qp_generic_mpra_${key}`),
        getQueryParams: filterParams(navCxt.state.params)

    }
};
