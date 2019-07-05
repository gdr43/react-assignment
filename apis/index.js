export const validateUser = ({ userName, password }) => {
  if (userName && password) {
    if (userName === 'hruday@gmail.com' && password === 'hruday123') {
      const idToken = Date.now();
      localStorage.setItem('idToken', idToken);
      return { error: false, idToken };
    } else return { error: true, message: 'Incorrect Username or Password' };
  } else return { error: true, message: "Username or Password can't be empty" };
};

export const getUserData = idToken => {
  if (localStorage.getItem('idToken') === idToken.toString()) {
    return new Promise(resolve => {
      resolve(JSON.parse(JSON.stringify(require('./user.json').user)));
    });
  } else return { error: true, message: 'Session Expired' };
};
