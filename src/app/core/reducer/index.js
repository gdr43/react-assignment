import { combineReducers } from 'redux';
import { loginReducer } from 'features/Login/reducers';
import { dashboardReducer } from 'features/Dashboard/reducers';

const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer
});

export default rootReducer;
