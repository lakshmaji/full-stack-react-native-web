import React from 'react';
import Dashboard from "commons/src/views/Dashboard";
import Login from "commons/src/views/Login";
import Register from 'commons/src/views/Register';
import SvgExample from 'commons/src/views/SvgExample';
import CreatePost from 'commons/src/views/CreatePost';
import Posts from 'commons/src/views/Posts';
import Post from 'commons/src/views/Post';

const RoutesDefinitions = [
    { path: '/', exact: true, name: 'Home' },
    { path: "/dashboard/:userId/theme/:themeMode", name: 'DashboardWithParams', component: Dashboard },
    { path: "/dashboard", name: 'Dashboard', component: Dashboard },
    { path: "/login", name: 'Login', component: Login },
    { path: "/register", name: 'Register', component: Register },
    { path: "/svg", name: 'Svg Example', component: SvgExample },
    { path: "/posts", name: 'Posts', component: Posts },
    { path: "/create-post", name: 'Create Post', component: CreatePost },
    { path: "/post/:id", name: 'Post Details', component: Post },
];

export default RoutesDefinitions;
