import React, { useState } from "react";
import axios from "axios";
const Form = (props) => {
	const [user, setUser] = useState({
		name: "",
	});

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const resp = await axios.get(`https://api.github.com/users/${user.name}`);
		console.log(user.name);
		props.onSubmit(resp.data);
		setUser({ name: "" });
		setLoading(false);
	};

	let name, value;
	const handleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;
		console.log(value);
		setUser({ ...user, [name]: value });
	};

	return (
		<>
			{loading ? (
				<>
					<h1>Loading....</h1>
				</>
			) : (
				<div className="container">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="GitHub username"
							name="name"
							id="name"
							value={user.name}
							onChange={handleInputs}
							className="form-control"
							required
						/>
						<button className="btn btn-muted">
							<img
								src="https://img.icons8.com/color/30/000000/search--v2.png"
								alt="search"
							/>
						</button>
					</form>
				</div>
			)}
		</>
	);
};
export default Form;
