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
		props.onSubmit(resp.data);
		setUser({ name: "" });
		setLoading(false);
	};

	let name, value;
	const handleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;
		setUser({ ...user, [name]: value });
	};

	return (
		<>
			{loading ? (
				<>
					<h1 className="text-center">Loading....</h1>
				</>
			) : (
				<div className="container">
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-md-10 col-10">
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
							</div>

							<div className="col-md-2 col-2">
								<button className="btn btn-muted">
									<img
										src="https://img.icons8.com/color/25/000000/search--v2.png"
										alt="search"
									/>
								</button>
							</div>
						</div>
					</form>
				</div>
			)}
		</>
	);
};
export default Form;
