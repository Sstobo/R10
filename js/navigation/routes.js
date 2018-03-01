import About from './../scenes/About/';
import { createRouter } from '@expo/ex-navigation';
import NavigationLayout from './NavigationLayout';
import Schedule from './../scenes/Schedule';
import Faves from './../scenes/Faves';
import Session from './../scenes/Session';
import Speaker from './../scenes/Speaker';

export default createRouter(() => ({
	faves: () => Faves,
	about: () => About,
	layout: () => NavigationLayout,
	schedule: () => Schedule,
	session: () => Session,
	speaker: () => Speaker
}));
