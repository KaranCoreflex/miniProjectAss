/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ProviderComponent from './miniProject/ProviderComponent';


AppRegistry.registerComponent(appName, () =>ProviderComponent);
