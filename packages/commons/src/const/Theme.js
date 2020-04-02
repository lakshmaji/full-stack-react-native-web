import {DefaultTheme, configureFonts} from "react-native-paper";
import {Text} from "react-native"
import React from "react";
export const fontConfig = {
    default: {
        regular: {
            fontFamily: 'SoleilRegular',
            fontWeight: 'normal',
        },
        bold: {
            fontFamily: 'SoleilBold',
            fontWeight: 'bold',
        },
        medium: {
            fontFamily: 'SoleilRegular',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'SoleilLight',
            fontWeight: 'normal',
        },
        thin: {
           fontFamily: 'SoleilLight',
            fontWeight: 'normal',
        },
    },
};
export const themeColors = {
    white: "#FFFFFF",
    primary: "#328E69",
    mainGrey: "#27353C",
    lightGrey: "#5B7583",
    label: "#7A7E81",
    labelDark: "#465A65",
    light: "#D6D6D6",
    whiteBtnText: "#363636",
    placeholder: "#A7A7A7"
};
export const themeStyles = {
    pageColored: {
        flex: 1,
        padding: 15,
        backgroundColor: '#F2F2F2'
    },
    flexColumnCentered: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    flexRowCentered: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subHeading: {
        fontFamily:'SoleilBold',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 17
    },
    title: {
        fontFamily:'SoleilBold',
    },
    btnFull: {
        maxHeight: 52,
        boxShadow: "2px 15px 14px -9px " + themeColors.primary,
        background: "transparent linear-gradient(90deg, "+themeColors.primary+" 0%, #63AD85 100%) 0% 0% no-repeat padding-box",
        fontSize: 20,
        letterSpacing: -0.48,
        fontWeight: 'bold',
        alignSelf: 'stretch',
        padding: 10,
        fontFamily: 'SoleilBold'
    },
    defaultText: {
        fontFamily: 'SoleilRegular'
    }
};
export const appTheme = {
    ...DefaultTheme,
    roundness: 10,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: '#328E69',
        accent: '#0cd1e8',
        text: '#27353C',
        placeholder: "#A7A7A7",
        backdrop: "#27353C",
        ...themeColors
    },
    fonts: configureFonts(fontConfig),
    styles: {
        ...themeStyles
    }
};
