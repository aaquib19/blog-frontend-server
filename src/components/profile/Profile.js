import React, { Component } from 'react';

class App extends Component {

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