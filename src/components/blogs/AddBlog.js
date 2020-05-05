import React, { Component } from 'react';
import axios from 'axios';
import { getJwt } from '../../helpers/jwt';
import { Link } from 'react-router-dom'

class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title: "",
            content: ""

        }
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
        // console.log(this.props);

    }


    change(e) {
        this.setState({
            [e.target.name]: e.target.value

        })
    }


    submit(e) {
        e.preventDefault();
        const url = "/blogs";
        const jwt = getJwt();
        // console.log(jwt);
        axios.post(
            url, {
            blog: {
                title: this.state.title,
                content: this.state.content,
                slug: this.state.title,
                user_id: this.props.user.id
            }
        }, {
            headers: {
                Authorization: jwt
            }
        }).then(res => {
            console.log(res.data);
            window.location.replace('/blogs/');

        }).catch(err => {
            console.log(err);
        })


    }

    render() {
        // console.log(this.props.user.id);
        console.log(this.props.user);
        if (this.props.user.createperm !== true) {
            // window.alert("you cannot create blogs")
            return (
                <h1>you dont have permision to create</h1>
            )
            // window.location.replace('/');

        }

        return (
            <div>
                <form onSubmit={e => this.submit(e)}>
                    <div>
                        <label>Title</label> <input type="text" name="title" onChange={this.change} value={this.state.email} /><br /><br />
                        <label>Content</label>   <textarea type="text" name="content" onChange={this.change} value={this.state.password} /><br /><br />

                        <button >create Blog</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;