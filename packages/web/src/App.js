/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Suspense } from "react";
import { StyleSheet } from "react-native";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import RoutesDefinitions from "./RoutesDefinitions";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { Platform } from "react-native-web";
import store, { persistor } from "commons/src/state/store";
import { appTheme } from "commons/src/const/Theme";
import { PersistGate } from "redux-persist/integration/react";
import { useAuthCheck } from 'commons/src/hooks/use-auth-check'

const RootComponent = () => {
  useAuthCheck();
  return <Suspense fallback={""}>
    <Switch>
      {RoutesDefinitions.map((route, idx) => {
        return route.component ? (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={props => <route.component {...props} />}
          />
        ) : null;
      })}
      <Redirect exact path="/" to="/login" />
      <Route
        path="*"
        name="Not Found"
        render={props => <h1>Not Found</h1>}
      />
    </Switch>
  </Suspense>
}
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={appTheme}>
          {Platform.OS === "web" ? (
            <style type="text/css">{`
                      @font-face {
                        font-family: 'MaterialCommunityIcons';
                        src: url(${require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf")}) format('truetype');
                      }
                      @font-face {
                        font-family: 'FontAwesome';
                        src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
                      }
                      @font-face {
                        font-family: 'SoleilBold';
                        src: url(${require("commons/fonts/soleil-bold.ttf")}) format('truetype');
                      }
                      @font-face {
                        font-family: 'SoleilLight';
                        src: url(${require("commons/fonts/soleil-light.ttf")}) format('truetype');
                      }
                      @font-face {
                        font-family: 'SoleilRegular';
                        src: url(${require("commons/fonts/soleil-regular.ttf")}) format('truetype');
                      }
                    `}</style>
          ) : null}
          <>
            <BrowserRouter>
              <RootComponent />
            </BrowserRouter>

            {/*<StatusBar barStyle="dark-content" />
                        <SafeAreaView>
                          <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                            {global.HermesInternal == null ? null : (
                              <View style={styles.engine}>
                                <Text style={styles.footer}>Engine: Hermes</Text>
                              </View>
                            )}
                            <View style={styles.body}>
                              <RecykalWeb/>
                            </View>
                          </ScrollView>
                        </SafeAreaView>*/}
          </>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  engine: {
    position: "absolute",
    right: 0
  },
  body: {},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default App;
