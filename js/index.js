/**
 * R10 React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

import About from "./scenes/About/";

export default class App extends Component {
  render() {
    return <About />;
  }
}
