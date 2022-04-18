/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { AppHoc } from './Source/Hoc/App';

AppRegistry.registerComponent(appName, () => AppHoc);