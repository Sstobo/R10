import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		margin: 14,
		marginTop: 44
	},
	time: {
		backgroundColor: 'lightgrey',
		paddingLeft: 8,
		paddingTop: 6,
		paddingBottom: 6,
		fontWeight: 'bold'
	},
	heartWrap: {
		flexDirection: 'row',
		height: 34,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 8,
		paddingRight: 8
	},
	eventTitle: {
		fontSize: 18,
		paddingTop: 6,
		paddingLeft: 8,
		fontWeight: 'bold'
	},
	location: {
		color: 'grey'
	}
});
