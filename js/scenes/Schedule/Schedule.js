//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { styles } from "./styles";
import {formatUnixDate } from './../../redux/helpers/dataReshaper'
import {goToSession} from './../../redux/helpers/navigationHelpers'
import {
  SectionList ,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'


const Schedule = ({data}) => (

  <View>

  <SectionList
    sections={data}
    renderItem={({ item }) =>
    <View> 

    <TouchableHighlight onPress={() => goToSession("schedule",{data})}>
    <View>
      <Text>{item.title}</Text>
      <Text>{item.location}</Text>
    </View>
    </TouchableHighlight>
    
    </View>}

  renderSectionHeader={({ section }) => <Text>{formatUnixDate(section.title)}</Text>}
  keyExtractor={(item , index) => index}
/>
    <Text>Schedule SCENE</Text>
  </View>
);


export default Schedule;
// use the helper function mandy shared
// in helpers file 
// use section list for sessions
// helper shapes data for sessions




