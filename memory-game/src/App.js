import React, { Component } from 'react';
import Image from "./components/Image";

class App extends Component {
	state = {
		images: [
			"anja.jpg",
			"bazel.jpg",
			"deviljho.jpg",
			"kirin.jpg",
			"kulu.jpg",
			"kushala.png",
			"legiana.jpg",
			"nerg.jpg",
			"odogaron.jpg",
			"paolumu.jpg",
			"rathalos.jpg",
			"rathian.jpg",
			"teostra.jpg",
			"tobi.jpg",
			"vaal.png",
			"xeno.jpg",
		],
		clicked: [],
		score: 0,
		hiscore: 0
	}

	//RANDOMIZE ORDER OF IMAGES
	scrambleImages = () => {
		let newArr = this.state.images;
		for (let i = newArr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let temp = newArr[i];
			newArr[i] = newArr[j];
			newArr[j] = temp;
		}
		this.setState({images: newArr});
	};

	//GAME LOGIC
	progressGame = monster => {
		if (this.state.clicked.indexOf(monster) === -1) { //if monster has not been clicked yet
			this.setState({
				clicked: [...this.state.clicked, monster], //add it to array of clicked monsters
				score: this.state.score + 1 //increment score by 1
			}, () => { //then
				if (this.state.score > this.state.hiscore) { //if new score is higher then high score
					this.setState({
						hiscore: this.state.score //set new high score
					});
				}
			});
		} else { //if monster has already been clicked before
			this.setState({ //reset game
				clicked: [],
				score: 0
			});
		}
	}

	//IMAGE CLICK EVENT
	handleImageClick = event => {
		this.scrambleImages(); //randomize order of images

		//passes only monster name (without file extension) to game logic function
		this.progressGame(event.target.dataset.image.split(".")[0]);
	};

	componentDidMount() { //on page load
		this.scrambleImages(); //randomize order of images
	}

	render() {
		return (
			<div>
				{this.state.images.map((image, index) => (
					<Image key={index} onClick={this.handleImageClick} image={image} />
				))}
			</div>
		);
	}
}

export default App;
