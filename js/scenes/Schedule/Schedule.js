//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList  } from "react-native";
import { styles } from "./styles";

// create a component
const Schedule = ({data}) => (
  <View>
  <SectionList
  sections={data}
  renderItem={({ item }) => <Text>{item.title}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
/>
    <Text>Schedule SCENE</Text>
  </View>
);


export default Schedule;
// use the helper function mandy shared
// in helpers file 
// use section list for sessions
// helper shapes data for sessions




