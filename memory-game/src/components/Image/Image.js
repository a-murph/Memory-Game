import React from "react";

const Image = props=> (
	<div>
		<img src={`images/${props.image}`} alt="" onClick={props.onClick} data-image={props.image}></img>
	</div>
);

export default Image;