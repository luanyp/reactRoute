import React from 'react'
// import {releaseConfigure} from "../../utils/configRelease";
//表格组件
import TableList from "../../components/TableList/index";  //表格
import {Collapse } from 'antd';
const Panel = Collapse.Panel;
class HttpDemo extends React.Component {
	constructor(props) {
		super(props);
		//在state设置两个属性，以便后续通过state对象来对其进行修改
		this.state = {
			tableList: {},
			pageIndex: 1,
		};
	}
	//绑定挂载事件
	
	componentDidMount() {
		this.DealList();
	};

	//分页回调
	paginationNum(mode) {
		console.log("分页回调", mode);
		this.setState({pageIndex: mode}, () => {
			this.DealList();
		})
	}
	//处理列表数据
	DealList = () => {
		// let _param = {'pageIndex': this.state.pageIndex};
		let _param = {'id': '7e628b0c-c830-4793-8028-64a5d484a1a5'};

		let data = global.HttpData("get", global.DeviceInfo, _param)
		data.then(res => {
			if (!res) return;
			let items = Object.assign({}, JSON.parse(JSON.stringify(res))).Content
			let _res = {}
			_res.items = items;
			_res.header = [
				{title: '设备名称', dataIndex: 'device_name', key: 0,},
				{title: '设备编号', dataIndex: 'device_number', key: 1,},
				{title: '设备类型', dataIndex: 'asset_type', key: 2,},
			]
			this.setState({
				tableList: _res,
			});
			console.log(this.state)
		})
	};

	render() {
		return (
			<div>
				<Collapse defaultActiveKey={['1']}>
					<Panel header="表格组件" key="1">
						<TableList paginationNum={mode => this.paginationNum(mode)} msg={this.state.tableList}/>
					</Panel>
				</Collapse>
			</div>
		)
	}
}

export default HttpDemo