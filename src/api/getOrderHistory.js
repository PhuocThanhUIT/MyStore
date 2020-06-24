const getOrderHistory = token =>
  fetch('http://10.0.134.146/api/order_history.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token}),
  }).then(res => res.json());

module.exports = getOrderHistory;
