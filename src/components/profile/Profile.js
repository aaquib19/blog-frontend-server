import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { getJwt } from '../../helpers/jwt';

class App extends Component {
    constructor(props) {
        super(props);
    }





    render() {


        return (
            <div>
                Name =  {this.props.user.name}
                <hr></hr>
                Email =  {this.props.user.email}
            </div>
        )
    }
}

export default App;