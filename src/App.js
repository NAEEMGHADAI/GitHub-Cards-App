import React from "react";
import CardList from "./CardList/CardList";
import Form from "./Form/Form";
import { useState } from "react";

const App = (props) => {
	const [values, setValues] = useState({
		profiles: [],
	});
	const addNewProfile = (profileData) => {
		setValues((prevValues) => ({
			profiles: [...prevValues.profiles, profileData],
		}));
	};

	return (
		<div>
			<div className="header">{props.title}</div>
			<Form onSubmit={addNewProfile} />
			<CardList profiles={values.profiles} />
		</div>
	);
};

export default App;
