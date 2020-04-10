import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Dashboard } from 'commons/src/views/Dashboard/Dashboard';
import RecykalMobile from 'commons/src/components/Recykal.mobile';
import { ThemeSample } from 'commons/src/views/ThemeSample/ThemeSample';
import { Provider } from 'react-redux';
import store, { persistor } from 'commons/src/state/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { appTheme } from 'commons/src/const/Theme';
import { LoginContainer as Login } from 'commons/src/views/Login/LoginContainer';
import { RegisterSuccess } from 'commons/src/views/Register/RegisterSuccess';
import Register from 'commons/src/views/Register/Register';
import Onboarding from 'commons/src/views/Onboarding/Onboarding';
import OnboardingBsTypes from 'commons/src/views/Onboarding/BsTypes/BsTypes';
import LoginWithEmail from 'commons/src/views/Login/LoginWithEmail';
import ForgotPassword from 'commons/src/views/Login/ForgotPassword';
import AuthCreatePassword from 'commons/src/components/AuthCreatePassword';
import OnboardingBsSubTypes from 'commons/src/views/Onboarding/BsSubTypes/BsSubTypes';
import BusinessInformation from 'commons/src/views/Onboarding/BusinessInformation/BusinessInformation';
import BusinessAddress from 'commons/src/views/Onboarding/BusinessAddress/BusinessAddress';
import BankDetails from 'commons/src/views/Onboarding/BankDetails/BankDetails';
import { PersistGate } from 'redux-persist/integration/react';
import { useAuthCheck } from 'commons/src/hooks/use-auth-check';
import Geocoder from 'react-native-geocoding';
import Toast from "commons/src/components/Toast";
import { AuthCheck } from 'commons/src/views/AuthCheck'
// Define new routes / screens here
const SCREENS_WITH_NO_HEADER = {
  Onboarding,
  OnboardingBsTypes,
  OnboardingBsSubTypes,
  BusinessInformation,
  BusinessAddress,
  BankDetails,
};

const SCREENS_WITH_HEADER = {
  Dashboard,
  ThemeSample,
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
  ForgotPassword,
  AuthCreatePassword,
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

  Geocoder.init("AIzaSyCylaQ5vV4-FKZ9SyJUYhOy_EBfJ_0_SUE");
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={appTheme}>
          <Toast />
          <MobileNav>
            <RootComponent />
          </MobileNav>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
