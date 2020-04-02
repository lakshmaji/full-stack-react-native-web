/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Suspense} from 'react';
import {StyleSheet,} from 'react-native';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import RoutesWeb from "./Routes.web";
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from "react-redux";
import {Platform} from "react-native-web";
import store from "commons/src/state/store";
import {appTheme} from "commons/src/const/Theme";


const AppWeb = () => {
    return (
        <Provider store={store}>
            <PaperProvider theme={appTheme}>
                {Platform.OS === 'web' ? (
                    <style type="text/css">{`
                      @font-face {
                        font-family: 'MaterialCommunityIcons';
                        src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
                      }
                      @font-face {
                        font-family: 'FontAwesome';
                        src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
                      }
                      @font-face {
                        font-family: 'SoleilBold';
                        src: url(${require('commons/fonts/soleil-bold.ttf')}) format('truetype');
                      }
                      @font-face {
                        font-family: 'SoleilLight';
                        src: url(${require('commons/fonts/soleil-light.ttf')}) format('truetype');
                      }
                      @font-face {
                        font-family: 'SoleilRegular';
                        src: url(${require('commons/fonts/soleil-regular.ttf')}) format('truetype');
                      }
                    `}</style>
                ) : null}
                <>
                    <BrowserRouter>
                        <Suspense fallback={''}>
                            <Switch>
                                {RoutesWeb.map((route, idx) => {
                                    return route.component ? (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={props => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    ) : (null);
                                })}
                                <Redirect exact path="/" to="/login"/>
                                <Route path="*" name="Not Found" render={props => <h1>Not Found</h1>}/>
                            </Switch>
                        </Suspense>
                    </BrowserRouter>

                </>
            </PaperProvider>
        </Provider>
    );
};

const styles = StyleSheet.create({
    scrollView: {},
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {},
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',

    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',

    },
    highlight: {
        fontWeight: '700',
    },
    footer: {

        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default AppWeb;
