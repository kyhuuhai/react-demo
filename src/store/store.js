import { createStore } from 'redux';
import itemsReducer from '../reducers/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  itemsReducer
});

const store = createStore(rootReducer);

// store.subscribe(() => {
//   console.log('Store', store.getState());
// });

export default store;
