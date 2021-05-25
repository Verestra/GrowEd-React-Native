import React from 'react';
import {AppRegistry} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './src/App';
import {name as appName} from './app.json';
import storeWithPersistor from './src/redux/store';

const ReduxContainer = () => (
    <Provider store={storeWithPersistor.store}>
      <PersistGate loading={null} persistor={storeWithPersistor.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );

AppRegistry.registerComponent(appName, () => ReduxContainer);
