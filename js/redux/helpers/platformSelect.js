import {
	Platform
} from 'react-native';

export const heartRender = Platform.select({
	ios: 'ios-heart',
	android: 'md-heart'
});