import React from 'react'
import { Layout ,Button} from 'antd';
// import {Route} from 'react-router-dom'
import CustomMenu from "../../components/Menu";//导航
import ContentMain from '../../components/ContentMain'//主体
import {BrowserRouter,Switch,Route, Link} from 'react-router-dom';

import TreeDemo from "../TreeDemo"

const { Header, Content, Footer, Sider } = Layout;

let LayoutStyle = {
	height: '100%',
}
let HeaderStyle = {
	'color': "#ffffff",
	'display': 'flex',
	'justifyContent': 'space-between',
	'alignItems': 'center'
}

//主界面
class Home extends React.Component {
	exit = (event)=>{
    event.preventDefault();
		this.props.history.replace('/login')
	}
	render() {
		return (
			<div >
				<Layout style={LayoutStyle}>
					<Header style={HeaderStyle}>
						Header
						<Button onClick={this.exit}>退出登录</Button>
					</Header>
					<Layout>
						<Sider className="App-customMenu">
							<CustomMenu/>
						</Sider>
						<Content className="App-contentMain">
							<ContentMain/>
						</Content>
					</Layout>
					<Footer>Footer</Footer>
				</Layout>
			</div>
		)
	}
}

export default Home