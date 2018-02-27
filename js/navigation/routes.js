import About from "./../scenes/About/";
import {
  createRouter,
} from '@expo/ex-navigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  about: () => About
}));