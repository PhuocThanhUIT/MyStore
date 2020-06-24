const register = (email, name, password) =>
  fetch('http://10.0.134.146/api/register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({email, name, password}),
  }).then(res => res.text());

module.exports = register;
