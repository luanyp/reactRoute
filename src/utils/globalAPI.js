/*接口配置*/
//导入发布配置
import {releaseConfigure} from './configRelease'
//设置是开发(1)、测试(2)、生产(3)，number类型
let urlhttp = "http://";
let domain = "";
switch (releaseConfigure){
	case 1:
		//开发
		domain = "app.esdgd.com/";
		break;
	case 2:
		//测试
		domain= "";
		break;
	case 3:
		//生产
		domain= "app.esdgd.com/";
		break;
	default:
		break;
}
//项目后台发布名称
let Backstage = "api/";

//服务器域名
let host = domain + Backstage;

//登录
global.login = urlhttp+host+"account/login";

//获取设备基础信息
global.deviceInfo = urlhttp+host+"assetaccountinfo/getassetaccountinfo";

//添加用户

//