//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import { styles } from "./styles";

// create a component
const Session = () => (
  <View style={styles.container}>
    <Text>Session SCENE</Text>
  </View>
);

export default Session;

// use the helper function mandy shared
// in helpers file 
// use section list for sessions
// helper shapes data for sessions


<SectionList
  sections={[
    {title: 'ADP', data: ['Bob', 'Alice']},
    {title: 'WDP', data: ['Anne', 'Mary', 'Joe']},
  ]}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
/>
// Helper to format format individual Firebase records
export const formatDataObject = (data) => {
  const dataObject = Object.getOwnPropertyNames(data).map(index => data[index]);
  return dataObject[0];
}

// Helper to format Firebase data into section list data
export const formatSessionData = (sessions) => {
  return sessions.reduce((acc, curr) => {
    const timeExists = acc.find(section => section.title === curr.start_time)
    timeExists ? timeExists.data.push(curr) : acc.push({title: curr.start_time, data: [curr]});
    return acc;
  }, []).sort((a, b) => a.title - b.title);
};