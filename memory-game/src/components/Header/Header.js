import React from "react";
import "./Header.css";

const Header = props => (
	<div className="header">
		<header className="topbar">
			<h3 className="topbar-title">MHW Memory Game</h3>
			{props.lastGuess === "none" ?
				<p className="topbar-guess">Click an image to begin</p>
				: <p className="topbar-guess">You guessed {props.lastGuess ? "correctly" : "incorrectly"}!</p>
			}
			<div className="topbar-scores">
				<span className="topbar-scores-score">Score: {props.score}</span>|
				<span className="topbar-scores-hiscore">High Score: {props.hiscore}</span>
			</div>
		</header>
		<div className="instructions">
			<h1 className="instructions-title">Monster Hunter World Memory Game</h1>
			<h4 className="instructions-text">Click on an image to earn points, but don't click on any more than once!</h4>
		</div>
	</div>
);

export default Header;