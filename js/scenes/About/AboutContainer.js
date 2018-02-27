//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {  AppRegistry,View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import About from "./About";
// this file creates and shares the props

// create a component


class AboutContainer extends Component {
  constructor() {
    super();
    this.state = { 
      loading: true,
      data: ["Test"],
    }
    };

   componentDidMount() {
      let endpoint = "https://r10app-95fea.firebaseio.com/code_of_conduct.json";
      fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        this.setState({ data, loading:false });
      })
      .catch(err => console.log(`Error fetching JSON: ${error}`))
    }
    // component DidMOunt //Fetch data  Loading: false
    componentDidUpdate() {
      if ( this.state.data && this.state.loading ) {
        this.setState({ loading: false });
      }
    }

    static route = {
      navigationBar: {
        title: 'About',
      }
    }

  render() {
    
    console.log(this.state.data)
    if (this.state.loading) {
      return (
       <ActivityIndicator animating={true} size="large" color="black" style={{marginTop: 44}}/>
      );
    } else {
    return (
    
    <About data={this.state.data}/> )
    }
  }
}


//make this component available to the app
AppRegistry.registerComponent('about', () => App);
export default AboutContainer;
