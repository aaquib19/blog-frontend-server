import React, { Fragment, Component } from "react";

import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBCollapse
} from "mdbreact";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getJwt } from '../../helpers/jwt';

class Navbar extends Component {
    constructor(props) {

        super(props);


        this.state = {
            user: undefined,
        }
        this.handleLogout = this.handleLogout.bind(this);


    }
    async  componentDidMount() {

        //getting user
        const jwt = getJwt();
        console.log(jwt);
        if (!jwt) {

        }
        else {
            // conso
            const url_ = "/auth/test"
            try {
                const res = await axios.get(url_, {
                    headers: {
                        Authorization: jwt
                    }
                });
                this.setState({
                    user: res.data.user
                })

            }
            catch (err) {
                console.log(err);
                localStorage.removeItem('cool-jwt');
            }
        }
    }
    handleLogout() {
        console.log("Logout");
        localStorage.removeItem('cool-jwt');
        window.location.replace('/login');
    }


    render() {
        const authLinks = (
            <MDBNavItem>
                <MDBNavLink exact to="/logout" >
                    <strong onClick={this.handleLogout}>Logout</strong>
                </MDBNavLink>
            </MDBNavItem>
        );
        const guestLinks = (

            <Fragment>
                <MDBNavItem>
                    <MDBNavLink to='/login'>Login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to='/register'>register</MDBNavLink>
                </MDBNavItem>
            </Fragment >
        );
        console.log(this.state.user);
        return (
            <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
                {/* <a href="/" className="py-0 font-weight-bold"> */}
                < Link
                    to="/"
                    style={{ color: "black", fontWeight: "bolder", fontSize: "20px" }}
                >
                    Blogs
      </Link >


                <MDBCollapse id="mainNavbarCollapse" navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to='/blogs'>Blogs</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to='/create'>Create Blogs</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active>
                            <MDBNavLink to='/profile'>Profile</MDBNavLink>
                        </MDBNavItem>

                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        {/* <MDBNavItem>
                            <MDBNavLink to='/login'>Login</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to='/register'>register</MDBNavLink>
                        </MDBNavItem> */}
                        <Fragment>{this.state.user ? authLinks : guestLinks}</Fragment>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar >
        );
    }
};


export default Navbar;