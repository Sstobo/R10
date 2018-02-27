
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
   View, 
   Text,
   FlatList,
   Image,
   ScrollView
   } 
   from "react-native";

import { styles } from "./styles";


const About = ({data}) => (
  
  <View style={styles.container}>

    <ScrollView>
    <View style={styles.aboutImageContainer} >
    <Image style={styles.aboutImage} source={require('../../assets/images/r10_logo.png')} />
    </View>

    <Text style={styles.aboutText}>R10 is a conference that focuses on just abouut any toipic related to dev.</Text>
    <Text style={styles.aboutSubLine}>Date & Venue</Text>
    <Text style={styles.aboutText}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC</Text>
    <Text  style={styles.aboutSubLine}>Code of Conduct</Text>

  <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.listWrapper}>
                <Text style={styles.menuTitlesAbout}> +{item.title} </Text>
                <Text style={styles.description}> +{item.description} </Text>
              </View>
            )}
            keyExtractor={item => item.title}
          />
      </ScrollView>
  </View>
);





export default About;
