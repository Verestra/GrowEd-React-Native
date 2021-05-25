import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducers from './auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducers'],
};

const rootReducer = combineReducers({
  authReducers
});

export default persistReducer(persistConfig, rootReducer);

