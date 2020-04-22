import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from 'commons/src/views/DashboardForMobile';
import { Provider } from 'react-redux';
import store, { persistor } from 'commons/src/state/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { appTheme } from 'commons/src/const/Theme';
import Login from 'commons/src/views/LoginForMobile';
import Register from 'commons/src/views/Register';
import Posts from 'commons/src/views/Posts';
import PostDetail from 'commons/src/views/Post';
import CreatePost from 'commons/src/views/CreatePost';
import SvgExample from 'commons/src/views/SvgExample';
import { PersistGate } from 'redux-persist/integration/react';
import { useAuthCheck } from 'commons/src/hooks/use-auth-check';
import { AuthCheck } from 'commons/src/views/AuthCheck'



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


// Define new routes / screens here
const MAIN_SCREENS_WITH_NO_HEADER = {
  SvgExample,
  Posts,
  CreatePost,
  PostDetail
};

const MAIN_SCREENS_WITH_HEADER = {
  Dashboard,
};
const MainNavigator = createStackNavigator(
  {
    ...getScreenWithNavOptions(MAIN_SCREENS_WITH_NO_HEADER, false),
    ...getScreenWithNavOptions(MAIN_SCREENS_WITH_HEADER),
  },
  {
    initialRouteName: 'Dashboard',
  },
);

const AUTH_SCREENS_WITH_NO_HEADER = {
  Login,
  Register,
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
            {/* <RootComponent /> */}
          </MobileNav>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
