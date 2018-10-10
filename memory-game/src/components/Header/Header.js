import React from "react";

const Header = props => (
	<div>
		<header>
			<h2>MHW Memory Game</h2>
			{props.lastGuess === "none" ?
				<p>Click an image to begin</p>
				: <p>You guessed {props.lastGuess ? "correctly" : "incorrectly"}!</p>
			}
			<p>Score: {props.score}</p>
			<p>High Score: {props.hiscore}</p>
		</header>
		<div>

		</div>
	</div>
);

export default Header;