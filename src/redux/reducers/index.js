import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import productReducer from './product';

const productConfig = {
  key: 'product',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const reducer = combineReducers({
  product: persistReducer(productConfig, productReducer),
});

export default reducer;
