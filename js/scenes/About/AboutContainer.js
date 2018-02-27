//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';

import About from "./About";

// create a component
class AboutContainer extends Component {
  constructor() {
    super();
    this.state = { Loading: true };

    // component DidMOunt //Fetch data  Loading: false
  }
  render() {
    return <About />;
  }
}

//make this component available to the app
export default AboutContainer;
