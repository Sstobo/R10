/**
 * R10 React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { NavigationContext, NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import NavigationLayout from './navigation/NavigationLayout';
import Router from './navigation/routes';
import Store from './redux/store';
import About from './scenes/About';
import Session from './scenes/Session';
import Speaker from './scenes/Speaker';
const navigationContext = new NavigationContext({
	router: Router,
	store: Store
});
export default class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<NavigationProvider context={navigationContext} router={Router}>
					<StackNavigation navigatorUID="root" initialRoute={Router.getRoute('layout')} />
				</NavigationProvider>
			</Provider>
		);
	}
}
