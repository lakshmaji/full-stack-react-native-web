import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../const/Routes';
import { useNavigation } from './use-navigation';


export const useLoginCheck = () => {
    const { navigateTo, isWeb, routeDetails, getStateByKey } = useNavigation();


    const onBack = (event) => {
        console.log('back &&&&&&&&&&&&& ', event);

    }
    useEffect(() => {

        window.addEventListener('popstate', onBack)
        return () => {
            window.removeEventListener('popstate', onBack)
        }
    }, [])
};