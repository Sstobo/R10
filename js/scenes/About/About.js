
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
   View, 
   Text,
   SectionList
   } 
   from "react-native";

import { styles } from "./styles";


const About = ({data}) => (
  
  <View style={styles.container}>
  
    <Text> R10 </Text>
    <Text>R10 is a conference that focuses on just abouut any toipic related to dev.</Text>
    <Text>Date & Venue</Text>
    <Text>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC</Text>
    <Text>Code of Conduct</Text>

{this.props.data && (
    <SectionList 
    sections={this.props.data}
    renderItem = {({item}) => <Text> {item} </Text>}
    renderSectionHeader={({ section}) => <Text> {section.title}</Text>}
    keyExtractor={item => item}
    />
  )}
  </View>
);



export default About;
