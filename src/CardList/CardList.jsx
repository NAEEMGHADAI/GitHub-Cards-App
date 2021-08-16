import Card from "../Card/Card";

const CardList = (props) => {
	return (
		<div>
			{props.profiles.map((profile) => (
				<Card {...profile} key={profile.id} />
			))}
		</div>
	);
};
export default CardList;
