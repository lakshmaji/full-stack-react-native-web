/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Button, withTheme, TextInput } from 'react-native-paper';
// import { useNavigation } from '../hooks/use-navigation'
import { useNavigation } from '@lakshmaji/navigation';
import { ROUTES } from '../const/Routes'
import { useDispatch } from 'react-redux'
import postActions from '../state/Posts/actions'

const CreatePost = ({ theme }) => {
    const { navigateTo, navigateBack } = useNavigation();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: 'Vigneshwara book',
        postContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    });

    const onChangeText = (key, value) =>
        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));


    const navigateToPosts = () => navigateTo(ROUTES.POSTS)

    const doCreate = () => {
        dispatch(postActions.createPost(formData, {}, {}, navigateBack))
    }

    return (
        <KeyboardAvoidingView
            style={styles.wrapper}
            behavior="padding"
            keyboardVerticalOffset={80}
        >
            <ScrollView
                style={[styles.container, { backgroundColor: theme.colors.background }]}
                keyboardShouldPersistTaps={'always'}
                removeClippedSubviews={false}
            >
                <TextInput
                    mode="outlined"
                    style={styles.inputContainerStyle}
                    label="Post Title"
                    placeholder="Type something"
                    value={formData.title}
                    onChangeText={text => onChangeText('title', text)}
                />

                <TextInput
                    mode="outlined"
                    style={styles.inputContainerStyle}
                    label="Post Content"
                    placeholder="Type something"
                    value={formData.postContent}
                    onChangeText={text => onChangeText('postContent', text)}
                />





                <View style={styles.row}>
                    <Button mode="contained" onPress={doCreate} style={[styles.button, styles.inputContainerStyle]}>
                        Create
                    </Button>

                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    row: {

    },
    wrapper: {
        flex: 1,
    },
    counterHelper: {
        textAlign: 'right',
    },
    inputContainerStyle: {
        margin: 8,
    },
    fontSize: {
        fontSize: 24,
    },
    textArea: {
        height: 80,
    },
    button: {

    }
});

export default withTheme(CreatePost);