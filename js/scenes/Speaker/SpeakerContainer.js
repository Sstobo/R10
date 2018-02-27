//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';

import Speaker from "./Speaker";

// create a component
class SpeakerContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <Speaker />;
  }
}

//make this component available to the app
export default SpeakerContainer;
