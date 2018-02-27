//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';

import About from "./About";
// this file creates and shares the props

// create a component


class AboutContainer extends Component {
  constructor() {
    super();
    this.state = { 
      loading: true,
      data = []
    
    };

    componentDidMount(){
      let endpoint = "https://r10app-95fea.firebaseio.com/code_of_conduct.json";
      fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(err => console.log(`Error fetching JSON: ${error}`))
    }
    // component DidMOunt //Fetch data  Loading: false
  }
  render() {

    return 
    {this.state.data && (
    <About data = {this.state.data}/>
    )
  }
}
}

//make this component available to the app
export default AboutContainer;
