//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {  AppRegistry,View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import Schedule from "./Schedule";

// create a component
class ScheduleContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: ["Test"],
    }
  }
  
  render() {
    return <Schedule />;
  }
}

//make this component available to the app
export default ScheduleContainer;
