import {createStore, combineReducers} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppReducer from '../Reducers/AppReducer';
import LoaderReducer from '@redux/Reducers/LoaderReducer';
import IntroScreenReducer from '../Reducers/IntroScreenReducer';

const AllReducers = {
  app: AppReducer,
  loader: LoaderReducer,
  intro: IntroScreenReducer,
};

const PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loader'],
};

const mergedReducer = combineReducers(AllReducers);
const persistedReducer = persistReducer(PersistConfig, mergedReducer);

export const Stores = createStore(persistedReducer);
export const Persistor = persistStore(Stores);
