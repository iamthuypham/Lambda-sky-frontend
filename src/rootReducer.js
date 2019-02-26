import { combineReducers } from 'redux';
import authenticationReducer from './components/authentication/authenticationReducer';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
  authenticationReducer,
  form: formReducer
});
