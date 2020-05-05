import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { getJwt } from '../../helpers/jwt';

class App extends Component {
    constructor(props) {

        super(props);


        this.state = {
            user: undefined,
            blogs: []

        }

        this.handleLogout = this.handleLogout.bind(this);


    }

    async componentDidMount() {
        console.log("component mounting")
        const url = "/blogs";
        const res = await axios.get(url);
        console.log(res);
        this.setState({
            blogs: res.data
        })
        console.log("blogs updated")


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
        const { blogs, user } = this.state;
        console.log(blogs)
        // console.log("user ==", user)
        let userLink = "";
        let logoutLink = "";
        if (user) {
            userLink = (
                <Link to="/profile/">{user.name}</Link>
            )
                ;

            logoutLink = <button onClick={this.handleLogout}>Logout</button>
        }
        if (blogs.length === 0) {
            return (
                <div>Loading ... </div>
            )
        }
        return (
            <div>
                {userLink}
                {logoutLink}
                <div>
                    <Link to="/login">Login</Link>
                    <hr></hr>
                    <Link to="/register">register</Link>
                    <hr></hr>

                    <Link to="/blogs">Blogs [Login Required]</Link>
                    <hr></hr>

                    <Link to="/create">create Blogs [Login Required]</Link>
                    <hr></hr>

                </div>
                <h1>Blogs List</h1>
                <ol>
                    {
                        blogs.map((blog, index) => {


                            return (
                                <li key={`d${blog.id}`}>
                                    <ul>
                                        <li key={`t${blog.id}`}>{blog.title}</li>
                                        <li key={blog.id} >{blog.content}</li>
                                    </ul>
                                    <br></br>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default App;