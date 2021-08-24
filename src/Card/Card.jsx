import React from "react";
import "../Card/Css/Card.css";

const Card = (props) => {
	console.log(props);
	const profile = props;
	localStorage.setItem("name", profile.name);
	localStorage.setItem("company", profile.company);
	localStorage.setItem("avatar_url", profile.avatar_url);
	return (
		<div className="ml-5">
			<div className="containerCard">
				<div className="github-profile">
					<img src={profile.avatar_url} alt="" />
					<div className="info">
						<div className="name">{profile.name}</div>
						<div className="company">{profile.company}</div>
					</div>
				</div>
				<div className="overlay">
					<div className="text">
						<h5>{localStorage.getItem("name")}</h5>
						<button className="btn btn-muted">Show More</button>
					</div>
				</div>
			</div>
			<br />
		</div>
	);
};

export default Card;
