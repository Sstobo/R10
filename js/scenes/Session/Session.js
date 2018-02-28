//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList  } from "react-native";
import { styles } from "./styles";

// create a component
const Session = ({data}) => (
  <View>
  <SectionList
  sections={data}
  renderItem={({ item }) => <Text>{item.title}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
  keyExtractor={(item , index) => index}
/>
    <Text>Session SCENE</Text>
  </View>
);


export default Session;
// use the helper function mandy shared
// in helpers file 
// use section list for sessions
// helper shapes data for sessions




