import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import store from 'commons/src/state/store';
import {Provider as PaperProvider} from 'react-native-paper';
import {appTheme} from 'commons/src/const/Theme';
import Login from 'commons/src/views/Login/Login';

// Define new routes / screens here
const SCREENS_WITH_NO_HEADER = {
  Login,
};

const SCREENS_WITH_HEADER = {
}

const getScreenWithNavOptions = (screens, headerShown = true) => Object.keys(screens).reduce(
  (acc, screen) => ({
    ...acc,
    [screen]: {
      screen: screens[screen],
      navigationOptions: {
        headerShown,
      },
    },
  }),
  {},
);

const nav = createStackNavigator(
  {
    ...getScreenWithNavOptions(SCREENS_WITH_NO_HEADER, false),
    ...getScreenWithNavOptions(SCREENS_WITH_HEADER),
  },
  {
    initialRouteName: 'Login',
  },
);

const MobileNav = createAppContainer(nav);

export default App = () => {

  return (
    <Provider store={store}>
      <PaperProvider theme={appTheme}>
        <MobileNav />
      </PaperProvider>
    </Provider>
  );
};