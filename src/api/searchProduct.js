const searchProduct = key => {
  const url = `http://10.0.134.146/api/search.php?key=${key}`;
  return fetch(url).then(res => res.json());
};

export default searchProduct;
