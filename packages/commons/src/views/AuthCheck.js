import React, { useEffect } from 'react';
import { useAuthCheck } from '../hooks/use-auth-check';
import { View, Text } from 'react-native';

export const AuthCheck = () => {
    useAuthCheck();

    useEffect(() => {
        console.info('AuthCheck inital loading componnet --------------------------------- 1 st stack')
    }, [])

    return <View>
        <Text>
            Some Loading indicator will be displayed here, will integrate with suspense too
        </Text>
    </View>

}