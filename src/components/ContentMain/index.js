import React from 'react'
//引入路由
import {Route, Switch, Redirect} from 'react-router-dom'

class ContentMain extends React.Component {
	render() {
		return (
			<div>
					<Switch>
						<Route path='/home' component={global.Home}/>
						<Route path='/es6' component={global.es6}/>
						<Route path='/general/fromDemo' component={global.FromDemo}/>
						<Route path='/AlertDemo' component={global.Alert}/>
						<Route path='/TableDemo' component={global.Table}/>
						<Route path='/HttpDemo' component={global.HttpDemo}/>
						<Route path='/TreeDemo' component={global.TreeDemo}/>
						<Route path='/Health' component={global.Health}/>
						<Redirect to='/home' />
					</Switch>
			</div>
		)
	}
}

export default ContentMain