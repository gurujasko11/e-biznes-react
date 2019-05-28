import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';

import Products from './Products';
import CreateProduct from './create/CreateProduct';

const ProductsRouter = () => {
  return (
    <Switch>
      <Route exact path="/products" component={Products} />
      <Route path="/products/createProduct" component={CreateProduct} />
    </Switch>
  );
}

export default ProductsRouter;
