import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';

import AddressesRouter from './components/addresses/Addresses.router';
import CategoriesRouter from './components/categories/Categories.router';
import OrdersRouter from './components/orders/Orders.router';
import OrderElementsRouter from './components/orderElements/OrderElements.router';
import ProductsRouter from './components/products/Products.router';
import './App.scss';

axios.defaults.baseURL = 'http://localhost:9000';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/addresses" component={AddressesRouter} />
        <Route path="/categories" component={CategoriesRouter} />
        <Route path="/orders" component={OrdersRouter} />
        <Route path="/orderElements" component={OrderElementsRouter} />
        <Route path="/products" component={ProductsRouter} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
