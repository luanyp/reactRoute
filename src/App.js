import React, {Component} from 'react';
//全局文件
import './main';
//路由
import {BrowserRouter} from 'react-router-dom';

//布局组件
import CustomMenu from "./components/Menu/index";//导航
import ContentMain from './components/ContentMain'//主题

//UI-antd-按需引入
import 'antd/dist/antd.css';
import {Layout } from 'antd';

const {
	Sider, Content,
} = Layout;

let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

let headerStyle = {
	height: '60px',
}
let footerStyle = {
	height: '60px',
}
let LayoutStyle = {
	height: '100%',
}
class Header extends Component {
	render(){
		return <div style={headerStyle}>头部logo</div>
	}
}
class Footer extends Component {
	render(){
		return <div style={footerStyle}>底部数据</div>
	}
}
class App extends Component {
	render() {
		return (
			<div className="App" style={{height:screenHeight}}>
				<BrowserRouter>
				<Layout style={LayoutStyle}>
					<Header>Header</Header>
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
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
