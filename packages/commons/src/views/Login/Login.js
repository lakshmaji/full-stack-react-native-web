import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Button, Searchbar, withTheme } from "react-native-paper";
// import Logo from "../../../imgs/address.svg";
import { styles } from "./Login.styles";
import { useDispatch, useSelector } from "react-redux";
import postActions from "../../state/Posts/actions";
import commentActions from "../../state/Comments/actions";

const PostItem = ({ title }) => {
  return <Text>{title}</Text>;
};
const Login = () => {
  const { posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const _getPosts = () => {
    dispatch(postActions.getAllPosts());
  };

  const _getComments = () => {
    dispatch(commentActions.getAllComments());
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.btns}>
          <Button onPress={_getPosts}>get posts</Button>
          <Button onPress={_getComments}>get comments</Button>
        </View>
        <View style={styles.posts}>
          <FlatList
            data={posts}
            renderItem={({ item }) => <PostItem title={item.title} />}
            keyExtractor={(item) => item.id + ''}
          />
        </View>

        <View style={styles.comments}>
          <FlatList
            data={comments}
            renderItem={({ item }) => <PostItem title={item.name} />}
            keyExtractor={(item) => item.id +''}
          />
        </View>
      </View>
    </>
  );
};

export default withTheme(Login);
