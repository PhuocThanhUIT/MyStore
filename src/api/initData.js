const initData = () =>
    fetch('http://10.0.134.146/api/')// eslint-disable-line
    .then(res => res.json());

export default initData;
