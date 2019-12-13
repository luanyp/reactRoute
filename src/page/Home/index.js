// import React from './node_modules/react'
import React from "react";

let homeMsg = {
	position: "relative",
	zIndex: "10",
	color: '#1890ff',
	textAlign: "center",
	fontSize: "14px",
	fontweight: "bold",
	width: "600px",
	margin: "150px auto",
};

class Home extends React.Component {
	render() {
		return (
			<div style={{color: '#ffffff'}}>
				首页内容
			</div>
		)
	}
}

export default Home