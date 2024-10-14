import React from 'react';
const higherOrderComponent = (WrappedComponent) => {
    // And return another component
    class HOC extends React.Component {

        constructor(props) {
            super(props);
            // Set initial count to be 0
            this.state = { count: 0 }; 
        }

        handleClick = () => {
            // Incrementing the count
            this.setState({ count: this.state.count + 1 }); 
        }

        render() {
            return (
                <>
                <h1>Welcome to demo</h1>
                    <WrappedComponent handleclick={this.handleClick}  show={this.state.count} />
                </>
            );
        }
    }
    return HOC;
};
export default higherOrderComponent;