import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    FlatList
} from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { Button, IconButton, Colors, withTheme, Dialog, Portal, Paragraph, TextInput } from 'react-native-paper'
import postActions from '../state/Posts/actions'
import { useNavigation } from "../hooks/use-navigation";
import { ROUTES } from "../const/Routes";
import Logout from "../components/Logout";


const Post = ({ theme }) => {
    const [visible, setVisible] = useState(false);
    const [selectedPost, setSelectedPost] = useState();

    const dispatch = useDispatch();
    const { navigateTo, navigateBack, getRouteParams: routeParams } = useNavigation();

    const posts = useSelector(state => state.posts);
    const [comment, setComment] = useState('');

    const onChangeText = (value) =>
        setComment(value);

    useEffect(() => {
        let unmounted = false;
        if (posts.length === 0) {
            // if there no posts available due to page reload then refetch all posts for this user
            dispatch(postActions.getAllPosts())
        } else {
            const findPost = posts.find(ePost => ePost._id === routeParams.id)
            if (findPost && !unmounted) {
                if (findPost.comments.length) {
                    if (!findPost.comments[0].description) {
                        // fetch comments
                        dispatch(postActions.getComment({ id: findPost._id }));
                    } else {
                        setSelectedPost(findPost);
                    }
                } else {
                    setSelectedPost(findPost);
                }
            } else {
                // fetch this particular post details only
                dispatch(postActions.getPost({ id: routeParams.id }))
            }
        }

        return () => { unmounted = true }

    }, [posts])


    const _showDialog = () => setVisible(true);

    const _hideDialog = () => setVisible(false);



    const navigateToPosts = () => navigateTo(ROUTES.POSTS);


    const _postDeleted = () => {
        _hideDialog();
        navigateToPosts()
    }

    const _deletePost = () => {
        dispatch(postActions.deletePost({ id: selectedPost._id }, {}, {}, _postDeleted))
    }

    const _postComment = () => {
        if (comment.length) {
            dispatch(postActions.postComment({
                id: selectedPost._id,
                description: comment
            }, {}, {}, () => setComment('')));
        }
    }



    if (!selectedPost) {
        return (
            <View>
                <Text>No post found</Text>
            </View>
        );
    }
    return (
        <>
            <Portal>
                <Dialog
                    visible={visible}
                    onDismiss={_hideDialog}>
                    <Dialog.Title>Alert</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Do you want to delete post {selectedPost?.title}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={_hideDialog}>Cancel</Button>
                        <Button onPress={_deletePost}>Delete</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <View
                style={{
                    margin: 10,

                    backgroundColor: theme.colors.surface
                }}
            >
                <View>
                    <Logout />
                    <Button mode="contained" onPress={navigateToPosts} style={[styles.button, styles.inputContainerStyle]}>
                        Back
                    </Button>
                </View>
                <View style={{ paddingHorizontal: 16, }}>
                    <View
                        style={{
                            // borderColor: '#fff',
                            // borderWidth: 2,
                            backgroundColor: "#fff",
                            shadowColor: "#fff",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 5,
                            borderRadius: 10,
                            // padding: 7,
                            marginBottom: 10
                        }}
                    >
                        <Image
                            source={{
                                uri: `https://picsum.photos/id/${Math.floor(
                                    Math.random() * 900
                                ) + 100}/536/354`
                            }}
                            style={{ height: 120, borderRadius: 10 }}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.postUsername}>
                                {selectedPost.createdBy}
                            </Text>
                            <IconButton
                                icon="delete"
                                color={Colors.red500}
                                onPress={_showDialog}
                                size={20}
                            >
                            </IconButton>

                        </View>
                        <Text
                            style={{
                                fontSize: 15,
                                // color: '#6c5b7b',
                                color: "#474a56",
                                fontWeight: "100",
                                padding: 10
                            }}
                        >
                            {selectedPost.postContent}
                        </Text>

                    </View>
                </View>

                <View>
                    <View>
                        <FlatList
                            data={selectedPost.comments}
                            keyExtractor={(item) => {
                                console.log('bello ', item);
                                return `${item._id}`;
                            }}
                            renderItem={({ item }) => {

                                return <View>
                                    <Text>{item.description}</Text>
                                </View>
                            }}
                        />

                    </View>

                    <Text>Add Comment</Text>
                    <View>
                        <TextInput
                            mode="outlined"
                            style={styles.inputContainerStyle}
                            label="Comment"
                            placeholder="Type something"
                            value={comment}
                            onChangeText={onChangeText}
                        />


                        <View style={styles.row}>
                            <Button disabled={comment.replace(/\s/g, '').length === 0} mode="contained" onPress={_postComment} style={[styles.button, styles.inputContainerStyle]}>
                                Post Comment
                    </Button>

                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        flex: 1,
        backgroundColor: "#d0d9ed",
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        // height: height - 300,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: colors.white,
        borderRadius: 5,
        // shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2
    },
    postBody: {
        fontSize: 20,
        color: "#1f267e",
        padding: 10
    },
    postUsername: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1f267e"
    },
    button: {

    },
    inputContainerStyle: {
        marginHorizontal: 8
    }
});
export default withTheme(Post);
