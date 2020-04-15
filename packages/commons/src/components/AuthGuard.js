
import React, { useEffect } from 'react';
import { useAuthCheck } from '../hooks/use-auth-check';

export const withAuthGuard = (WrappedComponent) => {
    const AuthComponent = (props) => {

        useAuthCheck()
        // TODO: need to verify this thing in mobile , once we added this login in `App.native.js` 
        useEffect(() => {

            console.log('Mounting auth gaurd component', WrappedComponent.displayName);

        }, [])
        return <WrappedComponent {...props} />;
    }
    AuthComponent.displayName = `AuthComponent(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    console.log('Register AuthGuard HOC*************');

    return AuthComponent;
}