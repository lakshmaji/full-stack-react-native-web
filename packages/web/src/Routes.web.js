import React from 'react';
import Login from "commons/src/views/Login/Login";



const RoutesWeb = [
    { path: '/', exact: true, name: 'Home' },
    { path: "/login", name: 'Login', component: Login},
];

export default RoutesWeb;
