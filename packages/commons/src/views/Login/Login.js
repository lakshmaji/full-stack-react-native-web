import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button, Searchbar, withTheme } from "react-native-paper";
// import Logo from "../../../imgs/address.svg";
// import Logo from "../../../imgs/bbc.svg";
import Logo from "../../../imgs/bbc-data.svg";

// import Logo, { ReactComponent as Logo } from "../../../imgs/address.svg";
// import {ReactComponent as Logo} from "../../../imgs/bbc.svg";
// import { SvgXml } from 'react-native-svg';

import { styles } from "./Login.styles";

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Logo
            // width={100}
            // height={100}
            style={{
              backgroundColor: "yellow",
              color: "white",
              alignSelf: "center"
            }}
          />
          {/* <SvgXml width="200" height="200" xml={Logo} /> */}
          <View>
            <Text style={styles.inputLabel}>Please login to continue</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default withTheme(Login);
