import React from "react";

class ToggleExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false
		};

		this.toggleVisibility = this.toggleVisibility.bind(this);
	}

	toggleVisibility() {
		this.setState(state => {
			if (state.visibility === true) {
					return { visibility: false };
				} else {
					return { visibility: true };
			}
		});
	}

	render() {
		
		if (this.state.visibility === true) {
			return (
				<div className='favActor'>
					<h1>My favorite actor of all time is</h1>
					<h1 className="willSmith">Will Smith</h1>
					<button id="toggleButtons" onClick={this.toggleVisibility}>Click Me</button>
				</div>
			);
		} else {
			return (
				<div className='favActor'>
					<h1>My favorite actor of all time is</h1>
					<button id="toggleButtons" onClick={this.toggleVisibility}>Click Me</button>
				</div>
			);
		}
	}
}

export default ToggleExample;