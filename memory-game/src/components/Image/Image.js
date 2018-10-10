import React from "react";

const Image = props=> (
	<div>
		<img src={`images/${props.image}`} alt=""></img>
	</div>
);

export default Image;