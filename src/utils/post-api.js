import axios from 'axios';

const BASE_URL = 'http://localhost:9000';
axios.defaults.withCredentials = true;


export {addProduct, addCategory, addToBasket, addOrder, addOrderDetail, addReview};

function addProduct(product_name, product_description, category_id, weight, country_of_origin, price) {
  const url = `${BASE_URL}/api/addProducts`;
  return axios.post(url, {
    name: product_name,
    description: product_description,
    category_id: category_id,
    weight: parseInt(weight),
    country_of_origin: country_of_origin,
    price: parseInt(price)
  }).then(response => response.data);
}

function addOrder(user_id, order_address) {
  const url = `${BASE_URL}/api/addOrder`;
  return axios.post(url, {
    user_id: parseInt(user_id),
    order_address: order_address,
  }).then(response => response.data);
}

function addOrderDetail(order_id, product_id,product_quantity) {
  const url = `${BASE_URL}/api/addOrderDetail`;
  return axios.post(url, {
    order_id: parseInt(order_id),
    product_id: parseInt(product_id),
    product_quantity: parseInt(product_quantity),
  }).then(response => response.data);
}

function addCategory(category_name) {
  const url = `${BASE_URL}/category`;
  return axios
    .post(url, {name: category_name})
    .then(response => response.data);
}

function addToBasket(product_id) {
  const url = `${BASE_URL}/api/addToBasket`;
  return axios
    .post(url, {product_id: product_id})
    .then(response => response.data);
}

export function login(email, password) { //todo password
  const url = `${BASE_URL}/login`;
  return axios
      .post(url, {email: email, password: password})
      .then(response => response.data);
}


export function registration(login, password, email, phone) {
  const url = `${BASE_URL}/register`;
  return axios
      .post(url, {
        login: login,
        password: password,
        email: email,
        phone: phone})
      .then(response => response.data);
}

function addReview(order_id, product_id, mark, review_content) {
  const url = `${BASE_URL}/api/addReview`;
  return axios.post(url, {
    order_id: order_id,
    product_id: product_id,
    mark: parseInt(mark, 10),
    review_content: review_content
  }).then(response => response.data);
}