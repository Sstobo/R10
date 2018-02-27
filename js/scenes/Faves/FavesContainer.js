//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {  AppRegistry,View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import Faves from "./Faves";

// create a component
class FavesContainer extends Component {
  constructor() {
    super();
    this.state = { 
      loading: true,
      data: ["Test"],
    }
  }
  
  render() {
    return <Faves />;
  }
}

//make this component available to the app
export default FavesContainer;
