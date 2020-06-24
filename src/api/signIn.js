const signIn = (email, password) =>
  fetch('http://10.0.134.146/api/login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({email, password}),
  })
    .then(res => res.json())
    .catch(err => console.log(err));
module.exports = signIn;
