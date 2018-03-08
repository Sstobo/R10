import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	button: {
		padding: 12,
		borderRadius: 22,
		backgroundColor: 'purple',
		width: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: 'black',
		fontSize: 22,
		marginBottom: 12,
		fontFamily: 'Montserrat'
	},
	image: {
		width: 120,
		height: 120,
		marginBottom: 24,
		borderRadius: 60
	},
	headerContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingRight: 80
	},
	description: {
		fontSize: 16,
		lineHeight: 24,
		marginTop: 12,
		marginBottom: 34,
		fontWeight: '200',
		textAlign: 'center',
		color: 'black',
		fontFamily: 'Montserrat'
	},
	link: {
		fontSize: 18,
		padding: 12,
		color: 'white',
		borderRadius: 12,
		backgroundColor: 'purple',
		margin: 24,
		fontFamily: 'Montserrat'
	},
	speaker: {
		fontFamily: 'Montserrat',
		fontSize: 20,
		paddingTop: 8,
		color: 'black'
	}
});
