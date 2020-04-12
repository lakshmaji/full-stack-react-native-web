import React, { useEffect } from 'react'
import Login from './Login'
import { useAuthCheck } from '../hooks/use-auth-check'
import { withTheme } from 'react-native-paper'
import Dashboard from './Dashboard'

const DashboardForMobile = () => {
    useAuthCheck();
    useEffect(() => {
        console.log('Dashboard for mobile auth check 3rd stack');
    }, [])
    return <Dashboard />
}

export default withTheme(DashboardForMobile)