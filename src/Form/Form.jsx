import React, { useState } from "react";
import axios from "axios";
const Form = (props) => {
	const [user, setUser] = useState({
		name: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resp = await axios.get(`https://api.github.com/users/${user.name}`);
		console.log(user.name);
		props.onSubmit(resp.data);
		setUser({ name: "" });
	};

	let name, value;
	const handleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;
		console.log(value);
		setUser({ ...user, [name]: value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="GitHub username"
				name="name"
				id="name"
				value={user.name}
				onChange={handleInputs}
				required
			/>
			<button>Add card</button>
		</form>
	);
};
export default Form;
