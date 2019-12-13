//Loadable插件需使用Loading
import Loadable from 'react-loadable'
import Loading from '../components/Loading/index';

//定义路由

// 主体
global.Main = Loadable({
	loader: () => import('../page/Main'),
	loading: Loading,
});
// 首页
global.Home = Loadable({
	loader: () => import('../page/Home'),
	loading: Loading,
});
//es6
global.es6 = Loadable({
	loader: () => import('../page/es6'),
	loading: Loading,
});
//表单
global.FromDemo = Loadable({
	loader: () => import('../page/General/FromDemo'),
	loading: Loading,
});
//网络请求
global.HttpDemo= Loadable({
	loader: () => import('../page/HttpDemo'),
	loading: Loading,
});
//弹框提醒
global.Alert = Loadable({
	loader: () => import('../page/AlertDemo'),
	loading: Loading,
});
//表格
global.Table = Loadable({
	loader: () => import('../page/TableDemo'),
	loading: Loading,
});
//树状图
global.TreeDemo = Loadable({
	loader: () => import('../page/TreeDemo'),
	loading: Loading,
});
//运行健康
global.Health = Loadable({
	loader: () => import('../page/Health'),
	loading: Loading,
});

//登陆界面
global.Login = Loadable({
	loader: () => import('../page/Login'),
	loading: Loading,
});