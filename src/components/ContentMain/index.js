import React from 'react'
//引入路由
import {Route, Switch, Redirect} from 'react-router-dom'
import NotFound from '../not-found/not-found.jsx'

class ContentMain extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Redirect exact from='/' to='/home'/>
					<Route path='/home' component={global.Home}/>
					<Route path='/es6' component={global.es6}/>
					<Route path='/general/fromDemo' component={global.FromDemo}/>
					<Route path='/AlertDemo' component={global.Alert}/>
					<Route path='/TableDemo' component={global.Table}/>
					<Route path='/HttpDemo' component={global.HttpDemo}/>
					<Route path='/TreeDemo' component={global.TreeDemo}/>
					<Route path='/Health' component={global.Health}/>
					<Route path='/person' component={global.person}/>
					{/* <Route component={NotFound}/> */}
				</Switch>
			</div>
		)
	}
}

export default ContentMain