import { StackNavigation, DrawerNavigation, DrawerNavigationItem } from '@expo/ex-navigation';
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Router from './../navigation/routes';
import { colors, typography } from './../config/styleConstants';
import Icon from 'react-native-vector-icons/Ionicons';

class NavigationLayout extends React.Component {
	static route = {
		navigationBar: {
			visible: false,
			tintColor: 'grey'
		}
	};

	render() {
		return (
			<DrawerNavigation
				id="main"
				initialItem="schedule"
				drawerWidth={300}
				renderHeader={this._renderHeader}
				renderIcon={isSelected => this.renderIcon(isSelected, 'md-calendar')}
			>
				<DrawerNavigationItem
					id="schedule"
					navigatorUID={'schedule'}
					selectedStyle={styles.selectedItemStyle}
					renderTitle={isSelected => this.renderTitle('schedule', isSelected)}
					renderIcon={isSelected => this.renderIcon(isSelected, 'md-calendar')}
				>
					<StackNavigation id="schedule" initialRoute={Router.getRoute('schedule')} />
				</DrawerNavigationItem>

				<DrawerNavigationItem
					id="about"
					navigatorUID={'about'}
					selectedStyle={styles.selectedItemStyle}
					renderTitle={isSelected => this.renderTitle('about', isSelected)}
					renderIcon={isSelected => this.renderIcon(isSelected, 'md-calendar')}
				>
					<StackNavigation id="about" initialRoute={Router.getRoute('about')} />
				</DrawerNavigationItem>

				<DrawerNavigationItem
					id="faves"
					navigatorUID={'faves'}
					selectedStyle={styles.selectedItemStyle}
					renderTitle={isSelected => this.renderTitle('faves', isSelected)}
					renderIcon={isSelected => this.renderIcon(isSelected, 'md-calendar')}
				>
					<StackNavigation id="faves" initialRoute={Router.getRoute('faves')} />
				</DrawerNavigationItem>
			</DrawerNavigation>
		);
	}

	renderHeader = (title, isSelected) => {
		return <View style={styles.header} />;
	};

	renderIcon(isSelected, iconName) {
		return <Icon name={iconName} size={20} color={isSelected ? colors.purple : colors.mediumGrey} />;
	}

	renderTitle(title, isSelected) {
		return (
			<Text
				style={{
					fontSize: 18,
					marginLeft: 12,
					fontFamily: typography.fontMain,
					color: isSelected ? colors.purple : colors.mediumGrey
				}}
			>
				{title}
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: 20
	},
	selectedItemStyle: {
		backgroundColor: 'lightgrey'
	},

	titleText: {
		fontWeight: 'bold'
	},
	selectedTitleText: {
		color: 'red'
	}
});

export default NavigationLayout;
