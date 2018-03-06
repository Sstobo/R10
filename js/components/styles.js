import { StyleSheet } from 'react-native';
import { colors, typography } from '../config/styleConstants';

export const styles = StyleSheet.create({
	gradientButton: {
		flex: 1,
		borderRadius: 25,
		width: 200,
		height: 50
	},
	buttonText: {
		color: colors.White,
		fontFamily: typography.fontMain,
		fontWeight: 'bold'
	}
});
