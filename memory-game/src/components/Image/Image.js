import React from "react";
import "./Image.css";

const Image = props=> (
	<div className="image-div">
		<img src={`images/${props.image}`} alt="" onClick={props.onClick} data-image={props.image}></img>
	</div>
);

export default Image;