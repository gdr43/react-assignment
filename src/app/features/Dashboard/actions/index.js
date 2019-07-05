import { action } from 'utils/actions';
import { GET_USER_DATA } from 'features/Dashboard/assets/actionTypes';
import { getUserData } from '../../../../../apis';

export const getDashboard = token => {
  const request = new Promise((resolve, reject) => {
    const result = getUserData(token);
    if (!result.error) {
      resolve(result);
    } else reject(result);
  });
  return action(GET_USER_DATA, request);
};
