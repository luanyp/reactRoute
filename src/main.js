/*全局配置*/
//网络请求
// import {post, get, put} from './utils/http'
import {HttpData} from './utils/http'
//全局样式
import './App.css';
//全局路由文件
export * from './router/config';
//接口api
export * from './utils/globalAPI'
/*全局网络请求*/
// global.$post=post;
// global.$get=get;
global.HttpData=HttpData;

//菜单，实际从后台取
global.menus = [
	{
		title: '数据总览',
		icon: 'icon-tushuo_px',
		uri: '',
		index: 0,
		id: 'dataOverview',
		isDefault: false,
		key: '/dataOverview'
	}, {
		title: '全局掌控',
		icon: 'iconnoun_Dview_',
		uri: '',
		index: 1,
		id: 'Overall',
		isDefault: false,
		key: '/Overall'
	}, {
		title: '基础数据',
		icon: 'iconjichushuju1',
		uri: '',
		index: 2,
		id: "basicData",
		isDefault: true,
		key: '/home'
	}, {
		title: '报表中心',
		icon: 'iconbaobiao_px',
		uri: '',
		index: 3,
		id: 'forms',
		isDefault: false,
		key: '/TreeDemo'
	}, {
		title: '统计',
		icon: 'icon-jienengshuju',
		uri: '',
		index: 4,
		id: 'statistics',
		isDefault: false,
		key: '/statistics'
	}, {
		title: '配置',
		icon: 'icon-peizhi_px',
		uri: '',
		index: 5,
		id: 'configure',
		isDefault: false,
		key: '/configure',
		subs: [
			{key: '/AlertDemo', title: '弹出框', icon: ''},
			{key: '/General/FromDemo', title: '测试1', icon: ''},
		]
	}, {
		title: '测试请求数据',
		icon: 'icon-jiankang_px',
		uri: '',
		index: 6,
		id: 'http',
		isDefault: false,
		key: '/HttpDemo'
	}
];


