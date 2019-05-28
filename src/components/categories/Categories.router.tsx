import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';

import Categories from './Categories';
import CreateCategory from './create/CreateCategory';

const CategoriesRouter = () => {
  return (
    <Switch>
      <Route exact path="/categories" component={Categories} />
      <Route path="/categories/createCategory" component={CreateCategory} />
    </Switch>
  );
}

export default CategoriesRouter;
