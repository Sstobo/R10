//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList  } from "react-native";
import { styles } from "./styles";

// create a component
const Session = () => (
  <View>
  <SectionList
  sections={[
    {title: 'ADP', data: ['Bob', 'Alice']},
    {title: 'WDP', data: ['Anne', 'Mary', 'Joe']},
  ]}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
/>
    <Text>Session SCENE</Text>
  </View>
);


export default Session;
// use the helper function mandy shared
// in helpers file 
// use section list for sessions
// helper shapes data for sessions




