//import liraries
import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect } from 'react-redux'
import Session from "./Session";
import  { fetchSession}  from "./../../redux/modules/session"
import {  AppRegistry,View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import {formatDataObject} from "./../../redux/helpers/dataReshaper"
class SessionContainer extends Component {
constructor(props) {
  super(props);
  this.state = {
    speaker: ""

  }
}
static route = {
  navigationBar: {
    title: 'session',
  }
}

  componentDidMount() {
    let speakerId = this.props.route.params.sessionData.item.speaker;
      fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&"equalTo"="${speakerId}"`)
        .then(res => res.json())
        .then(name => {
          let thisName = formatDataObject(name);
          console.log(thisName.name)
          this.setState({speaker: thisName.name})})
        .catch(err => err)
  }

  render() {
    if (this.props.loading) {
      return (
       <ActivityIndicator animating={true} size="large" color="black" style={{marginTop: 44}}/>
      );
    } else {
    return (
    <Session data={this.props.route.params.sessionData} name={this.state.speaker}/> 
    )
   }
  }
}


export default SessionContainer;


