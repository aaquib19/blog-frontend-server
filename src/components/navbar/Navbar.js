import React, { Fragment } from "react";

import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Navbar = () => {
    const authLinks = (
        <MDBNavItem>
            <MDBNavLink exact to="/logout" >
                <strong>Logout</strong>
            </MDBNavLink>
        </MDBNavItem>
    );
    const guestLinks = (
        <Fragment>
            <MDBNavItem>
                <Link
                    to="/login"
                    style={{ color: "black", fontWeight: "bolder", fontSize: "20px" }}
                >
                    Login
        </Link>
            </MDBNavItem>
            <MDBNavItem>
                <Link
                    to="/register"
                    style={{
                        color: "black",
                        fontWeight: "bolder",
                        fontSize: "20px",
                        marginLeft: "1rem"
                    }}
                >
                    Sign Up
        </Link>

                {/* <a href="register">register</a> */}
            </MDBNavItem>
        </Fragment>
    );

    return (
        <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
            {/* <a href="/" className="py-0 font-weight-bold"> */}
            <Link
                to="/"
                style={{ color: "black", fontWeight: "bolder", fontSize: "20px" }}
            >
                Blogs
      </Link>


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
                    <MDBNavItem>
                        <MDBNavLink to='/login'>Login</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to='/register'>register</MDBNavLink>
                    </MDBNavItem>

                    {/* <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment> */}
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
};


export default Navbar;