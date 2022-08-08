import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

// {
// 			name: "Dmitriy Glove",
// 			url: require("./img/avatar-s-1.jpg"),
// 		},
// 		{
// 			name: "Natasha Ivanova",
// 			url: require("./img/avatar-s-2.jpg"),
// 		},
// 		{
// 			name: "Anna Moore",
// 			url: require("./img/avatar-s-3.jpg"),
// 		},
// 		{
// 			name: "Michael Beckham",
// 			url: require("./img/avatar-s-4.jpg"),
// 		},
// 		{
// 			name: "Boris Khazinski",
// 			url: require("./img/avatar-s-5.jpg"),
// 		},

function TinderCards() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get("/tinder/cards");
			setPeople(req.data);
		}
		fetchData();
	}, []);

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		// setLastDirection(direction);
	};
	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	return (
		<div className="tinderCards">
			<div className="tinderCardsContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.imgUrl})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
