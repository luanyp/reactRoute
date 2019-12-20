import React from 'react'
import { Layout ,Popconfirm } from 'antd';
import {Redirect} from 'react-router-dom'

import CustomMenu from "../../components/Menu";//导航
import ContentMain from '../../components/ContentMain'//主体
// import imgUrl from './LOGO.png'

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
function getCookie(key) {
	const name = key + "=";
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		const c = ca[i].trim();
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

global.user = JSON.parse(getCookie('userMsg'));
//主界面
class Home extends React.Component {
	// constructor(){
	// 	super()
	// 	this.exit = this.exit.bind(this);  //不为箭头函数时解决this指向问题
	// }
	// exit = (e)=>{
	// 	e.preventDefault();
	// 	const bindThis = this
	// 	confirm({
	// 		title: '是否确定退出?',
	// 		okText: '确定',
	// 		cancelText: '取消',
	// 		content: false,
	// 		maskClosable: true,
	// 		onOk() {
	// 			bindThis.props.history.replace('/login')
	// 		},
	// 	});
	// }

  confirm = () => {
		this.props.history.replace('/login')
  };

	render() {
    if(!global.user) {
      // 自动跳转到登陆(在render()中)
      return <Redirect to='/login'/>
    }
		return (
			<div className="main">
				<Layout style={LayoutStyle}>
					<Header style={HeaderStyle}>
						<div className="App-logo">
						  {/* <img src={imgUrl} /> */}
							LOGO
						</div>
						<Popconfirm 
							title="是否确定退出？" 
							okText="确定" 
							cancelText="取消"
							onConfirm={this.confirm}
							placement="left"
						>
							<a href="#">exit</a>
						</Popconfirm>
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