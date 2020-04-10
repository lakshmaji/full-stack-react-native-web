import React, { useEffect } from 'react';
import { useAuthCheck } from '../hooks/use-auth-check';
import { View, Text } from 'react-native';

export const AuthCheck = () => {
    useAuthCheck();

    useEffect(() => {
        console.info('This is a component that will render the app just launches --- and will be used to show some loading indicator')
    }, [])

    return <View>
        <Text>
            Some Loading indicator will be displayed here, will integrate with suspense too
        </Text>
    </View>

}