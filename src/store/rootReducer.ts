import { combineReducers } from 'redux';
import services from './modules/services/reducer';

const rootReducer = combineReducers({
  services,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
