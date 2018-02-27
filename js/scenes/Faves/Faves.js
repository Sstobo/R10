import React, { Component } from "react";
import PropTypes from "prop-types";
import {
   View, 
   Text,
   FlatList,
   Image,
   ScrollView
   } 
   from "react-native";

import { styles } from "./styles";

// create a component
const Faves = () => (
  <View style={styles.container}>
    <Text>Faves SCENE</Text>
  </View>
);

export default Faves;
