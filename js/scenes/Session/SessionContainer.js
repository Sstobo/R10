//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';

import Session from "./Session";

// create a component
class SessionContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <Session />;
  }
}

//make this component available to the app
export default SessionContainer;
