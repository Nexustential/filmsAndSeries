import React from "react";

class ThisExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        name1: ''
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleClick1 = this.handleClick1.bind(this);
    }

    handleClick() {
      this.setState({
        name: 'How I Met Your Mother',
      })
    }

    handleClick1() {
        this.setState({
          name1: 'Seinfeld'
        })
    }
    
    render() {
      return (
        <div className='container' style={{marginTop: '130px'}}>
            <div className="row">
                <div className="col">
                    <h1>My favorite series is: {this.state.name}</h1>
                    <button id='btn' onClick={this.handleClick}>Click Me</button>
                </div>
                <div className="col">
                    <h1>My second favorite series is: {this.state.name1}</h1>
                    <button id='btn' onClick={this.handleClick1}>Click Me</button>
                </div>
            </div>
        </div>
      );
    }
  };

export default ThisExample;