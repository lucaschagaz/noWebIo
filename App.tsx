import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Theme } from "./src/Styles/Theme/theme";
import { NewDemand } from "./src/pages/NewDemand/NewDemand";
import { Home } from "./src/pages/Home/Home";
import { Routes } from "./src/routes";

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
};
