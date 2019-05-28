import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';

import Orders from './Orders';
import CreateOrder from './create/CreateOrder';

const OrdersRouter = () => {
  return (
    <Switch>
      <Route exact path="/orders" component={Orders} />
      <Route path="/orders/createOrder" component={CreateOrder} />
    </Switch>
  );
}

export default OrdersRouter;
