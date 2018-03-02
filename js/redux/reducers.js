import { NavigationReducer } from '@expo/ex-navigation';
import { combineReducers } from 'redux';
import aboutReducer from './modules/about';
import sessionReducer from './modules/session';
import scheduleReducer from './modules/schedule';
import speakerReducer from './modules/speaker';

export default (rootReducer = combineReducers({
	navigation: NavigationReducer,
	about: aboutReducer,
	session: sessionReducer,
	schedule: scheduleReducer,
	speaker: speakerReducer
}));
