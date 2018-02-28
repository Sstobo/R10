//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList , FlatList } from "react-native";
import { styles } from "./styles";

// create a component
const Session = ({data}) => (
  
  <View>
    <Text>{data.item.location}</Text>
 <Text>{data.item.title}</Text>
 <Text>{data.item.start_time}</Text>
 <Text>{data.item.description}</Text>
<Text> Presented by: </Text>


  </View>
);


export default Session;
// use the helper function mandy shared
// in helpers file 
// use section list for sessions
// helper shapes data for sessions




