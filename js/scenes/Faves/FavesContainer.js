//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';

import Faves from "./Faves";

// create a component
class FavesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <Faves />;
  }
}

//make this component available to the app
export default FavesContainer;
