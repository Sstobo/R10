import { StyleSheet } from 'react-native';
import { colors, typography } from './../../config/styleConstants';
export const styles = StyleSheet.create({
	container: {
		margin: 14,
		marginTop: 44
	},
	title: {
		fontSize: 17,
		marginTop: 12,
		marginBottom: 4,
		fontFamily: 'Montserrat',
		color: 'black',
		paddingLeft: 12
	},
	time: {
		paddingTop: 4,
		paddingBottom: 4,
		backgroundColor: 'lightgrey',
		fontSize: 15,
		color: 'black',
		paddingLeft: 12,
		fontWeight: 'bold'
	},
	location: {
		fontSize: 16,
		fontFamily: typography.fontMain,
		color: 'grey',
		borderBottomColor: '#F00',
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderBottomWidth: 1,
		borderRightWidth: 0,
		paddingBottom: 12,
		paddingLeft: 12
	}
});
