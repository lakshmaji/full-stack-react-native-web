import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Dashboard } from 'commons/src/views/Dashboard';
import RecykalMobile from 'commons/src/components/Recykal.mobile';
import { Provider } from 'react-redux';
import store, { persistor } from 'commons/src/state/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { appTheme } from 'commons/src/const/Theme';
import { LoginContainer as Login } from 'commons/src/views/Login/LoginContainer';
import { RegisterSuccess } from 'commons/src/views/Register/RegisterSuccess';
import Register from 'commons/src/views/Register';
import LoginWithEmail from 'commons/src/views/Login/LoginWithEmail';
import { PersistGate } from 'redux-persist/integration/react';
import { useAuthCheck } from 'commons/src/hooks/use-auth-check';
import { AuthCheck } from 'commons/src/views/AuthCheck'
// Define new routes / screens here
const SCREENS_WITH_NO_HEADER = {
};

const SCREENS_WITH_HEADER = {
  Dashboard,
};

const getScreenWithNavOptions = (screens, headerShown = true) =>
  Object.keys(screens).reduce(
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

const MainNavigator = createStackNavigator(
  {
    Recykal: RecykalMobile,
    ...getScreenWithNavOptions(SCREENS_WITH_NO_HEADER, false),
    ...getScreenWithNavOptions(SCREENS_WITH_HEADER),
  },
  {
    initialRouteName: 'Dashboard',
  },
);

const AUTH_SCREENS_WITH_NO_HEADER = {
  Login,
  RegisterSuccess,
  Register,
  LoginWithEmail,
};

const AuthNavigator = createStackNavigator({ ...getScreenWithNavOptions(AUTH_SCREENS_WITH_NO_HEADER, false) }, {
  initialRouteName: 'Login'
})


const MobileNav = createAppContainer(createSwitchNavigator(
  {
    AuthCheck,
    Main: MainNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'AuthCheck'
  }
));

const RootComponent = () => {
  console.log('ruing app root component =========================')
  useAuthCheck();
  return null;
};

export default App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={appTheme}>
          <MobileNav>
            <RootComponent />
          </MobileNav>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
