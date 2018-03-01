import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		margin: 14,
		marginTop: 24
	},
	location: {
		color: 'darkgrey',
		fontSize: 18,
		fontFamily: 'Montserrat',
		marginBottom: 18
	},
	headWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		color: 'black',
		fontSize: 20,
		marginBottom: 12,
		fontFamily: 'Montserrat'
	},
	date: {
		color: 'red',
		fontSize: 18,
		fontFamily: 'Montserrat'
	},
	// p
	description: {
		fontSize: 16,
		lineHeight: 24,
		marginTop: 12,
		marginBottom: 34,
		fontFamily: 'Montserrat'
	},
	presented: {
		fontSize: 18,
		color: 'darkgrey',
		marginBottom: 24,
		fontFamily: 'Montserrat'
	},
	speaker: {
		fontFamily: 'Montserrat',
		fontSize: 20,
		paddingTop: 8,
		color: 'black'
	}
});
