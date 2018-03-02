import { NavigationActions } from '@expo/ex-navigation';
import Store from './../store';
import Router from '../../navigation/routes';

export const goToSession = (currentNavigatorUID, sessionData) => {
	Store.dispatch(
		NavigationActions.push(currentNavigatorUID, Router.getRoute('session', { sessionData: sessionData }))
	);
};
export const goToSpeaker = speakerData => {
	console.log({ speakerData });
	Store.dispatch(NavigationActions.push('root', Router.getRoute('speaker', { speakerData })));
};
export const removeSpeaker = () => {
	Store.dispatch(NavigationActions.pop('root'));
};
