import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';

import OrderElements from './OrderElements';
import CreateOrderElement from './create/CreateOrderElement';

const OrderElementsRouter = () => {
  return (
    <Switch>
      <Route exact path="/orderElements" component={OrderElements} />
      <Route path="/orderElements/createOrderElement" component={CreateOrderElement} />
    </Switch>
  );
}

export default OrderElementsRouter;
