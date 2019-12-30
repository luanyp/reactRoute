import React from 'react'
import {Form, Icon, Input, Button, Checkbox,message, Divider} from 'antd'
import './index.css' 
import  {setCookie} from '../../utils/common.js'

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields( async (err, values) => {
      if (!err) {
        const {username, password, remember} = values
        // const result = await reqLogin(username, password)
        // const result = await global.HttpData("post", global.login, {username, password})
        // console.log(result)

          const res = await global.HttpData("post", global.login, {username, password})
          console.log(res)
          if (!res) return;
          if(res.IsSuccess === true && res.Code === '00'){
            message.success('登陆成功',2)
            global.user = res.Content
            if(remember){
              setCookie('token',JSON.stringify(res.Content.token),14)
            }
            this.props.history.replace('/')
          }else{
            message.error(res.Content,2)
          }
        // return
/*         result.then(res => {
          if (!res) return;
          if(res.IsSuccess === true && res.Code === '00'){
            message.success('登陆成功',2)
            if(remember){
              setCookie('token',JSON.stringify(res.Content.token),14)
            }
            this.props.history.replace('/')
          }else{
            message.error(res.Content,2)
          }
        }) */
      }
    });
  };
  
	render() {
    const { getFieldDecorator } = this.props.form;
		return (
      <div className="login-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
            <Checkbox className="login-form-remember">
              记住密码
              </Checkbox>)}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
		)
	}
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm
