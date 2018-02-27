import React, { Component } from 'react';
import {Text } from 'react-native'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import Router from "./../navigation/routes"
import {colors} from "./../config/styleConstants"

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      
      <TabNavigation id="main" navigatorUID="main" tabBarColor={colors.black} initialTab="about" >
      
      <TabItem id="schedule" title="schedule" renderTitle={this.renderTitle}>

        <StackNavigation
          id="schedule"
          navigatorUID="schedule"
          initialRoute={Router.getRoute('schedule')}
        />
      </TabItem>
      <TabItem id="about" title="about"  renderTitle={this.renderTitle}>
        <StackNavigation
          id="about"
          navigatorUID="about"
          initialRoute={Router.getRoute('about')}
        />
      </TabItem>
      <TabItem id="faves" title="faves"  renderTitle={this.renderTitle}>
        <StackNavigation
          id="faves"
          navigatorUID="faves"
          initialRoute={Router.getRoute('faves')}
        />
      </TabItem>
    </TabNavigation>
  
  );
}

renderTitle(isSelected, title){
  
  return <Text style={{color: isSelected ? colors.white : colors.mediumGrey}}>{title}</Text>
  }
}



export default NavigationLayout;