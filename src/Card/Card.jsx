import React from "react";

const Card = (props) => {
	const profile = props;
	localStorage.setItem("name", profile.name);
	localStorage.setItem("company", profile.company);
	localStorage.setItem("avatar_url", profile.avatar_url);
	return (
		<div className="ml-4">
			<div className="github-profile">
				<img src={localStorage.getItem("avatar_url")} alt="" />
				<div className="info">
					<div className="name">{localStorage.getItem("name")}</div>
					<div className="company">{localStorage.getItem("company")}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
