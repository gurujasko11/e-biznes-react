import React from 'react';
import logo from './logo.svg';
import './App.css';
import Address from "./Address";
import Category from "./Category";
import User from "./User";
import Order from "./Order";
import OrderElement from "./OrderElement";
import Product from "./Product";
import Login from "./Login";


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var logged = <li> <a href="http://localhost:9000/signOut">Wyloguj</a>  </li>;
var unlogged = <li> <Link to="/login">Zaloguj</Link>  </li>;
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      state:null,
      error: null,
      isLoaded: false,
      data:null,
      loggedIn:null
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("http://localhost:9000/isLogged", {credentials:"include"})
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({loggedIn:logged})

            },
            (error) => {
              this.setState({loggedIn:unlogged})
            }
        )
  }

  render() {
    return (
        <Router>
          <div className="container">

            <ul className="menu">

              <li>
                <Link to="/addresses">addresses</Link>
              </li>
              <li>
                <Link to="/categories">categories</Link>
              </li>
              <li>
                <Link to="/users">users</Link>
              </li>
              <li>
                <Link to="/orders">orders</Link>
              </li>
              <li>
                <Link to="/order_elements">order elements</Link>
              </li>
              <li>
                <Link to="/products">products</Link>
              </li>

              {this.state.loggedIn}
            </ul>
            {/*<img className="profilowe" src={logo} alt='Zdjęcie profilowe'/>*/}

            <Route path="/addresses" component={Address}/>
            <Route path="/categories" component={Category}/>
            <Route path="/users" component={User}/>
            <Route path="/orders" component={Order}/>
            <Route path="/order_elements" component={OrderElement}/>
            <Route path="/products" component={Product}/>
            <Route path="/login" component={Login}/>
          </div>
        </Router>
    )
  }
}

export default App;