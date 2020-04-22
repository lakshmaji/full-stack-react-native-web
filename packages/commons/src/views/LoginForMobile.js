import React, { useEffect } from 'react'
import Login from './Login'
import { useAuthCheck } from '../hooks/use-auth-check'
import { withTheme } from 'react-native-paper'

const LoginForMobile = () => {
    useAuthCheck();
    useEffect(() => {
        console.log('Login for mobile auth check 2nd stack');
    }, [])
    return <Login />
}

export default withTheme(LoginForMobile)