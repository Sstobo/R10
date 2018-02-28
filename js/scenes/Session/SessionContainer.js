//import liraries
import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect } from 'react-redux'
import Session from "./Session";
import  { fetchSession}  from "./../../redux/modules/session"
import {  AppRegistry,View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// create a component
class SessionContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSession())
    }
      static route = {
        navigationBar: {
          title: 'Session',
        }
      }


  render() {

    if (this.props.loading) {
      return (
       <ActivityIndicator animating={true} size="large" color="black" style={{marginTop: 44}}/>
      );
    } else {
    return (
    
    <Session data={this.props.data}/> 
    )
   }
  }
}

//make this component available to the app
const mapStateToProps = state => ({
  loading: state.session.loading,
  data: state.session.data
});

export default connect(mapStateToProps)(SessionContainer);


