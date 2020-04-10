import React from 'react';
import { Dashboard } from "commons/src/views/Dashboard";
import Login from "commons/src/views/Login";
import Register from 'commons/src/views/Register';

const RoutesDefinitions = [
    { path: '/', exact: true, name: 'Home' },
    { path: "/dashboard/:userId/theme/:themeMode", name: 'DashboardWithParams', component: Dashboard },
    { path: "/dashboard", name: 'Dashboard', component: Dashboard },
    { path: "/login", name: 'Login', component: Login },
    { path: "/register", name: 'Register', component: Register },
];

export default RoutesDefinitions;
