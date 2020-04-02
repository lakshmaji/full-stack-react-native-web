import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button, Searchbar, withTheme } from "react-native-paper";
import Logo from "../../../imgs/address.svg";
import { styles } from "./Login.styles";

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Logo
            width={100}
            height={100}
            style={{
              backgroundColor: "green",
              color: "white",
              alignSelf: "center"
            }}
          />
          <View>
            <Text style={styles.inputLabel}>Please login to continue</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default withTheme(Login);
