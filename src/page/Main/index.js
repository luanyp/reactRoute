import React from 'react'
import { Layout ,Popconfirm ,Icon} from 'antd';
import {Redirect} from 'react-router-dom'
import cookie from 'react-cookies'
import CustomMenu from "../../components/Menu";//导航
import ContentMain from '../../components/ContentMain'//主体
// import imgUrl from './LOGO.png'
import {getCookie,clearCookie} from '../../utils/common.js'
const { Header, Content, Footer, Sider } = Layout;

let test = cookie.load('token')

let LayoutStyle = {
	height: '100%',
}
let HeaderStyle = {
	'color': "#ffffff",
	'display': 'flex',
	'justifyContent': 'space-between',
	'alignItems': 'center'
}

global.token = JSON.parse(getCookie('token'));

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
		clearCookie('token')
		this.props.history.replace('/login')
  };

	render() {
    if(!global.token) {
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
							<a href="#"><Icon type="logout"/></a>
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