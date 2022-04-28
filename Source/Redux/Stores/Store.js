import {createStore, combineReducers} from 'redux';
import AppReducer from '../Reducers/AppReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderReducer from '@redux/Reducers/LoaderReducer';
import IntroScreenReducer from '@redux/Reducers/IntroScreenReducer';

const PersistConfig = {
  key: 'RNTemplate',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const AllReducer = {
  app: AppReducer,
  loader: LoaderReducer,
  intro: IntroScreenReducer,
};

const rootReducer = combineReducers(AllReducer);
const persistedReducer = persistReducer(PersistConfig, rootReducer);

const Stores = createStore(persistedReducer);
export const Persistor = persistStore(Stores);
export default Stores;
