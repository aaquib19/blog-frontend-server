import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            email: "",
            password: "",
            name: "",
            checkbox: false,

        }
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        console.log(this.props);

    }


    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }



    submit(e) {
        e.preventDefault();
        const url = "/auth/register";
        console.log(this.state);
        axios.post(
            url, {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            createperm: this.state.checkbox
        }).then(res => {
            console.log("created user successfully");
            window.location.replace('/');

            localStorage.setItem('cool-jwt', res.data.access_token)
        })




    }


    render() {
        return (
            <div>
                <form onSubmit={e => this.submit(e)}>
                    <div>
                        <label>Name</label>    <input type="text" name="name" onChange={this.change} value={this.state.name} /><br /><br />
                        <label>Email</label>    <input type="text" name="email" onChange={this.change} value={this.state.email} /><br /><br />
                        <label>Password</label>  <input type="password" name="password" onChange={this.change} value={this.state.password} /><br /><br />
                        <label>Wanna create blogs</label>  <input type="checkbox" name="checkbox" onChange={this.handleInputChange} value={this.state.checkbox} /><br /><br />

                        <button >Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;
