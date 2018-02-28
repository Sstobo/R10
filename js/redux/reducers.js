import { NavigationReducer} from '@expo/ex-navigation';
import {combineReducers} from 'redux';
import aboutReducer from "./modules/about";
import sessionReducer from './modules/session';
  
export default rootReducer = (

  combineReducers({
    navigation: NavigationReducer,
    about: aboutReducer,
    session: sessionReducer
  })
);