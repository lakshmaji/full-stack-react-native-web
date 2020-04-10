import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Alert,
    Image
} from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { Button, IconButton } from 'react-native-paper'
import postActions from '../state/Posts/actions'
import { useNavigation } from "../hooks/use-navigation";
import { ROUTES } from "../const/Routes";


export default () => {
    const dispatch = useDispatch();
    const { navigateTo, navigateBack } = useNavigation();

    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postActions.getAllPosts())
    }, [])

    const navigateToCreatePost = () => navigateTo(ROUTES.CREATE_POST);

    const confirmDeletion = async post => {
        await Alert.alert(
            "Delete Post Title",
            "Delete Post Message"
            [
            {
                text: "Cancel",
                onPress: () => console.log("cancelled"),
                style: "cancel"
            },
            {
                text: "Yes",
                onPress: () => this.props.toDeletePost(post._id)
            }
            ],
            { cancelable: false }
        );
    };

    // if (!(posts && posts.length > 0)) {
    //     return (
    //         <View>
    //             <Text>Loading posts...</Text>
    //         </View>
    //     );
    // }
    return (
        <ScrollView
            style={{
                margin: 10
            }}
        >
            <View>
                <Button mode="contained" onPress={navigateBack} style={[styles.button, styles.inputContainerStyle]}>
                    Back
                    </Button>
                <Button mode="contained" onPress={navigateToCreatePost} style={[styles.button, styles.inputContainerStyle]}>
                    Create Post
                    </Button>
            </View>
            <View>
                {posts.map((post, index) => {
                    return (
                        <View
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
                        >
                            <Image
                                source={{
                                    uri: `https://picsum.photos/id/${Math.floor(
                                        Math.random() * 900
                                    ) + 100}/536/354`
                                }}
                                style={{ height: 120, borderRadius: 10 }}
                            />
                            <Text style={styles.postUsername}>
                                {post.createdBy}
                            </Text>
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

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    padding: 3,
                                    alignItems: "center"
                                }}
                            >
                                <IconButton
                                    name="trash-o"
                                    backgroundColor="#f67280"
                                    onPress={() => confirmDeletion(post)}
                                    size={10}
                                >
                                    {/* <Text style={{ fontSize: 9, color: "#fff" }}>
                                        Delete Post Title
                                    </Text> */}
                                </IconButton>
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
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
