
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import {name as appName} from './app.json';
import App from './src/App';

const resolveURL = Federated.createURLResolver({
  containers: {
    salessappone: 'http://localhost:9000/[name][ext]',
    // salessapptwo: 'http://localhost:9001/[name][ext]',

  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: 'ios',
    },
  };
});

AppRegistry.registerComponent(appName, () => App);