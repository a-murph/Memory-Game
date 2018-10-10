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
		]
	}

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

	componentDidMount() {
		this.scrambleImages();
	}

	render() {
		return (
			<div>
				{this.state.images.map(image => (
					<Image image={image} />
				))}
			</div>
		);
	}
}

export default App;
