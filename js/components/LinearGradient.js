import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, typography } from '../config/styleConstants';

const GradientButton = ({ text }) => (
	<LinearGradient
		start={{ x: 0.0, y: 1.0 }}
		end={{ x: 1.0, y: 0.0 }}
		colors={[colors.red, colors.purple]}
		style={{ flex: 1, paddingVertical: 12, paddingHorizontal: 18 }}
	>
		<Text style={{ color: colors.white, fontFamily: typography.fontMain, fontSize: 16, textAlign: 'center' }}>
			{text}{' '}
		</Text>
	</LinearGradient>
);

export default GradientButton;
