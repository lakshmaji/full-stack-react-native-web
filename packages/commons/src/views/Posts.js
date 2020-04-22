import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Alert,
    Image,
    TouchableOpacity
} from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { Button, IconButton, Colors, withTheme, Dialog, Portal, Paragraph } from 'react-native-paper'
import postActions from '../state/Posts/actions'
import { useNavigation } from "../hooks/use-navigation";
import { ROUTES } from "../const/Routes";
import Logout from "../components/Logout";


const Posts = ({ theme }) => {
    const [visible, setVisible] = useState(false);
    const [selectedPost, setSelectedPost] = useState();

    const dispatch = useDispatch();
    const { navigateTo, navigateBack } = useNavigation();

    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postActions.getAllPosts())
    }, [])

    const _showDialog = () => setVisible(true);

    const _hideDialog = () => setVisible(false);



    const navigateToCreatePost = () => navigateTo(ROUTES.CREATE_POST);

    const confirmDeletion = post => {
        setSelectedPost(post);
        _showDialog();
    };

    const _deletePost = () => {
        dispatch(postActions.deletePost({ id: selectedPost._id }, {}, {}, _hideDialog))
    }

    const navigateToPostDetail = (post) => {
        navigateTo(ROUTES.POST_DETAIL, { id: post._id })
    }

    const navigateToDashboard = () => {
        // navigateBack()
        navigateTo(ROUTES.DASHBOARD)
    }

    // if (!(posts && posts.length > 0)) {
    //     return (
    //         <View>
    //             <Text>Loading posts...</Text>
    //         </View>
    //     );
    // }
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
            <ScrollView
                style={{
                    margin: 10,

                }}
                contentContainerStyle={{
                    backgroundColor: theme.colors.surface
                }}
            >
                <View>
                    <Logout />
                    <Button mode="contained" onPress={navigateToDashboard} style={[styles.button, styles.inputContainerStyle]}>
                        Back
                    </Button>
                    <Button mode="contained" onPress={navigateToCreatePost} style={[styles.button, styles.inputContainerStyle]}>
                        Create Post
                    </Button>
                </View>
                <View style={{ paddingHorizontal: 16, }}>
                    {posts.map((post, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
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
                                onPress={() => navigateToPostDetail(post)}
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
                                        {post.createdBy}
                                    </Text>
                                    <IconButton
                                        icon="delete"
                                        color={Colors.red500}
                                        onPress={() => confirmDeletion(post)}
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
                                    {post.postContent.slice(0, 70)}
                                </Text>

                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
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
export default withTheme(Posts);
