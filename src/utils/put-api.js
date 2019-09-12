import axios from "axios";

const BASE_URL = 'http://localhost:9000';
axios.defaults.withCredentials = false;

export {updateProduct, updateCategory, updateUser};


function updateProduct(product_id, product_name, product_description, category_id, weight, country_of_origin, price) {
    const url = `${BASE_URL}/api/updateProduct/` + product_id;
    return axios.put(url, {
        name: product_name,
        description: product_description,
        category_id: category_id,
        weight: parseInt(weight),
        country_of_origin: country_of_origin,
        price: parseInt(price)
    }).then(response => response.data);
}

function updateCategory(id, name) {
    const url = `${BASE_URL}/api/updateCategory/` + id;
    return axios.put(url, {
        name: name
    }).then(response => response.data);
}

function updateUser(user_id, user_name, user_surname, user_email) {
    const url = `${BASE_URL}/auth/updateUser/` + user_id;
    return axios.put(url, {
        user_name: user_name,
        user_surname: user_surname,
        user_email: user_email
    }).then(response => response.data);
}