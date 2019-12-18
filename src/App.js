import React, {Component} from 'react';
//全局文件
import './main';
//路由
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';

import Login from "./page/Login";
//UI-antd-按需引入
import 'antd/dist/antd.css';

let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

class App extends Component {
	render() {
		return (
			<div className="App" style={{height:screenHeight}}>
				<BrowserRouter >
					<Switch>
					  <Route exact path='/login' component={Login}/>
					  <Route path='/' component={global.Main}/>
						<Redirect to='/login' />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
