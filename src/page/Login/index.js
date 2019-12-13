import React from 'react'
import {Button,message} from 'antd'

class Login extends React.Component {
  submitLogin = (event)=>{
    event.preventDefault();
      message.info('登录成功')
      this.props.history.replace('/')
    }
  
	render() {
		return (
			<div>
      <h2 style={{color: '#ffffff'}}>这是登录窗口</h2>
      <Button onClick={this.submitLogin}>登录</Button>
    </div>
		)
	}
}
export default Login
