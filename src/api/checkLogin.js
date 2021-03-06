import {localhost} from './ipAddress';
const checkLogin = token =>
  fetch(`http://${localhost}/api/check_login.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token}),
  })
    .then(res => {
      console.log('checkLogin PASS');
      return res.json();
    })
    .catch(() => {
      console.log('checkLogin Fail');
      return 'TOKEN_KHONG_HOP_LE';
    });

export default checkLogin;
