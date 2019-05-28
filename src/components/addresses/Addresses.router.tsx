import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';

import Addresses from './Addresses';
import CreateAddress from './create/CreateAddress';

const AddressesRouter = () => {
  return (
    <Switch>
      <Route exact path="/addresses" component={Addresses} />
      <Route path="/addresses/createAddress" component={CreateAddress} />
    </Switch>
  );
}

export default AddressesRouter;
