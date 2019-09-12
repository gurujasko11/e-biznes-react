import React, {Component} from 'react';
import {getUser, signOut} from "../utils/get-api";
import {login, registration} from "../utils/post-api";
import {setIsAdmin, setIsLogin, setUser} from "./actions/cartActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {ADMIN_EMAIL} from "./LoginMaterialize";


class Registration extends Component {


    constructor(props) {
        super(props);
        this.state = {
            user: [],
            login: '',
            password: '',
            email: '',
            phone: '',
            isRegister: false
        }

        this.postData = this.postData.bind(this)
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleLogin = (e) => {
        this.setState({login: e.target.value});
    };

    handlePassword = (e) => {
        this.setState({password: e.target.value});
    };

    handleEmail = (e) => {
        this.setState({email: e.target.value});
    };

    handlePhone = (e) => {
        this.setState({phone: e.target.value});
    };

    postData = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        let login = this.state.login;
        let phone = this.state.phone;
        registration(login, password, email, phone).then((status) => {
            if(status === "User exist"){
                alert("User with this email exist")
            }else {
                this.setState({isRegister: true})
            }
        });
    }

    render() {
            if(!this.state.isRegister){

                return (
                    <form onSubmit={this.postData}>
                        <div className="center">
                            <br/>

                            <label htmlFor="name">Name</label>
                            <input id="login"
                                   required={true}
                                   name="login" type="text"
                                   placeholder="Enter login"
                                   onChange={this.handleLogin}/>

                            <label htmlFor="password">Password</label>
                            <input id="password"
                                   required={true}
                                   name="Product password" type="password"
                                   placeholder="Enter password"
                                   onChange={this.handlePassword}/>

                            <label htmlFor="email">Email</label>
                            <input id="email"
                                   required={true}
                                   name="email" type="email"
                                   placeholder="Enter email"
                                   onChange={this.handleEmail}/>

                            <label htmlFor="phone">Surname</label>
                            <input id="phone"
                                   required={true}
                                   name="phone" type="text"
                                   placeholder="Enter phone"
                                   onChange={this.handlePhone}/>

                            <button className="waves-effect waves-light btn">Create an account</button>
                        </div>
                    </form>
                );
            }else {
                return (
                    <div>
                        <h1>
                            User <b><i>{this.state.email}</i></b> created!
                        </h1>
                    </div>
                )
            }
    }
}

const mapStateToProps = (state) => {
    return {
        isAdmin: state.cartReducer.isAdmin,
        isLogin: state.cartReducer.isLogin,
        user: state.cartReducer.user
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        setIsAdmin: (isAdmin) => {
            dispatch(setIsAdmin(isAdmin))
        },
        setIsLogin: (isLogin) => {
            dispatch(setIsLogin(isLogin))
        },
        setUser: (user) => {
            dispatch(setUser(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration)