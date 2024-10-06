import React from 'react';
import PropTypes from 'prop-types';

class ClassCompDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0 
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }
    
    increase() { 
        this.setState({ count: this.state.count + 1 }); 
    }
    decrease() {
        this.setState({ count: this.state.count - 1 }); 
    }

    render() {
        return (
           <div style={{ margin: '50px' }}> 
                <h3>Counter App using Class Component : </h3> 
                <h2> {this.state.count}</h2> 
                <button onClick={this.increase}> Add</button> 
                <button onClick={this.decrease}> Sub</button> 
  
            </div> 
        );
    }
}

ClassCompDemo.propTypes = {};

export default ClassCompDemo;
