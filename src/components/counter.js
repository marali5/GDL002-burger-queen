import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                
            </div>
        );
    };
};

export default Counter