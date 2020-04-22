import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../const/Routes';
// import { useNavigation } from './use-navigation';
import { useNavigation } from '@lakshmaji/navigation';


export const useLoginCheck = () => {
    const { navigateTo } = useNavigation();

    const { token } = useSelector(state => state.user);

    useEffect(() => {
        if (token) {
            navigateTo(ROUTES.DASHBOARD, {}, null, true);
        }
    }, [token])
};