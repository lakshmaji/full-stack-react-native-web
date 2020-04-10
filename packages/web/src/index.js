import { AppRegistry } from 'react-native'
import AppWeb from './App';
import React from "react";

AppRegistry.registerComponent('myReactApp', () => AppWeb);
AppRegistry.runApplication('myReactApp', {
    rootTag: document.getElementById('root'),
});
