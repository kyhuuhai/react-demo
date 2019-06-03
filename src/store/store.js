import { createStore } from 'redux';
import postsReducer from '../reducers/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postsReducer
});

const store = createStore(rootReducer);

// store.subscribe(() => {
//   console.log('Store', store.getState());
// });

export default store;
