// import React from './node_modules/react'
import React from "react";
import Test2 from "../../components/echarts2"
import Sunburst from "../../components/echarts2/Sunburst"

import  '../../utils/common.js'
var date = new Date();
console.log(date.format('yyyy-MM-dd'))
console.log(global)
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
				<Test2 data={{
					xdata: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					ydata: {
						ydata1:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
						ydata2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
					}
				}}/>
				<Sunburst />
			</div>
		)
	}
}

export default Home