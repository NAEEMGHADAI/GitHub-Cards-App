import React, { Component } from "react";
import axios from "axios";
export default class Form extends Component {
	state = {
		userName: "",
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const resp = await axios.get(
			`https://api.github.com/users/${this.state.userName}`
		);
		this.props.onSubmit(resp.data);
		this.setState({ userName: "" });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="GitHub username"
					required
					value={this.state.userName}
					onChange={(e) => this.setState({ userName: e.target.value })}
				/>
				<button>Add card</button>
			</form>
		);
	}
}
