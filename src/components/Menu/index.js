import React from 'react'
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';
const menus = global.menus;
//此组件的意义就是将数据抽离出来，通过传递数据去渲染

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1239946_ubz1v0l6wd8.js',
});
class CustomMenu extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			location: window.location
		}
	}
	componentWillMount(){
		// console.log(this.state.location)
	}
	componentDidMount(prevProps){
		// console.log(this.state.location)
		console.log('old props:', prevProps);
		console.log('new props:', this.props);
	}
	handleClick = (e) => {
		console.log('click ', e);
	}
	renderSubMenu = ({key, icon, title, subs, id}) => {
		return (
			<Menu.SubMenu key={key} title={<span>{icon && <IconFont type={icon}/>}<span>{title}</span></span>} id={id}>
				{
					subs && subs.map(item => {
						return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
					})
				}
			</Menu.SubMenu>
		)
	}
	renderMenuItem = ({key, icon, title,id}) => {
		return (
			<Menu.Item key={key} id={id}>
					{/*{icon && <Icon type={icon}/>}*/}
					{/*<span>{title}</span>*/}
				<Link to={key}>
					{icon && <IconFont type={icon}/>}
					<span>{title}</span>
				</Link>
			</Menu.Item>
		)
	}
	render() {
		return (
				<Menu
				onClick={this.handleClick}
				selectedKeys={[this.state.location.pathname]}
				defaultSelectedKeys={[this.state.location.pathname]}
				defaultOpenKeys={['sub1']}
				mode="vertical"
				theme="dark"
			>
				{
					menus.map(item => {
						return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
					})
				}
			</Menu>
		)
	}
}
export default CustomMenu
