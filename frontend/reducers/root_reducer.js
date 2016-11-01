// frontend/reducers/root_reducer.jsx

import { combineReducers } from 'redux';

import BenchesReducer from './benches_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  benches: BenchesReducer,
  session: SessionReducer
});

export default RootReducer;
