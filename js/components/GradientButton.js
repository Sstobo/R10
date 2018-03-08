import React from 'react';
import { colors } from '../config/styleConstants';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const GradientButton = ({ buttonText, marginTop, marginLeft, fontSize }) => (
	<LinearGradient
		colors={[colors.red, colors.purple]}
		start={{ x: 0.0, y: 0.25 }}
		end={{ x: 0.5, y: 1.0 }}
		style={styles.gradientButton}
	>
		<Text
			style={[
				styles.buttonText,
				{
					textAlign: 'center',
					marginTop: marginTop,
					fontSize: fontSize,
					color: 'white',
					fontWeight: 'bold'
				}
			]}
		>
			{' '}
			{buttonText}
		</Text>
	</LinearGradient>
);

GradientButton.propTypes = {
	buttonText: PropTypes.string.isRequired,
	marginTop: PropTypes.number,
	marginLeft: PropTypes.number,
	fontSize: PropTypes.number
};
export default GradientButton;
