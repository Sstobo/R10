import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	border: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgrey'
	},
	buttonText: {
		color: 'white'
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	button: {
		padding: 12,
		borderRadius: 22,
		backgroundColor: 'purple',
		width: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 60,
		width: 60,
		borderRadius: 30,
		marginRight: 24,
		marginBottom: 14
	},
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
		fontSize: 26,
		marginBottom: 12,
		fontFamily: 'Montserrat'
	},
	date: {
		color: 'red',
		fontSize: 18,
		fontFamily: 'Montserrat'
	},
	time: {
		color: '#cf392a',
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 12
	},
	description: {
		fontSize: 20,
		lineHeight: 24,
		marginTop: 12,
		marginBottom: 34,
		fontWeight: '200',
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
