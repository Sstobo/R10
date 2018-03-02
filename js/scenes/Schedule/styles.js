import { StyleSheet } from 'react-native';
import { colors, typography } from './../../config/styleConstants';
export const styles = StyleSheet.create({
	container: {
		margin: 14,
		marginTop: 44
	},
	title: {
		fontSize: 22,
		marginTop: 12,
		marginBottom: 4,
		fontFamily: 'Montserrat',
		color: 'black',
		paddingLeft: 12
	},
	time: {
		backgroundColor: 'lightgrey',
		fontSize: 22,
		color: 'black',
		paddingLeft: 12
	},
	location: {
		fontSize: 16,
		fontFamily: typography.fontMain,
		borderBottomColor: '#F00',
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderBottomWidth: 1,
		borderRightWidth: 0,
		paddingBottom: 12,
		paddingLeft: 12
	}
});
