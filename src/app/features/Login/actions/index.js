import { action } from 'utils/actions';
import {
  UPDATE_INPUT,
  SUBMIT_LOGIN,
  HIDE_ERROR
} from 'features/Login/assets/actionTypes';
import { validateUser } from '../../../../../apis';

export const handleInputChange = details => action(UPDATE_INPUT, details);

export const handleLogin = details => {
  const request = new Promise((resolve, reject) => {
    const result = validateUser(details);
    if (!result.error) {
      resolve(result);
    } else reject(result);
  });
  return action(SUBMIT_LOGIN, request);
};

export const hideLoginError = () => action(HIDE_ERROR);
