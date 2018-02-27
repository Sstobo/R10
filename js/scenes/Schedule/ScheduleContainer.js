//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';

import Schedule from "./Schedule";

// create a component
class ScheduleContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <Schedule />;
  }
}

//make this component available to the app
export default ScheduleContainer;
