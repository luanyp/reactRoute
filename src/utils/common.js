
//cokkie 处理
export function setCookie (cname, cvalue, exdays){
	let d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires+"; path=/";//path=/是根路径
}
export function getCookie (key) {
	const name = key + "=";
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		const c = ca[i].trim();
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

export function clearCookie (name) {
	setCookie(name, "", -1);
}

//格式化时间
export function formatDate(date, format) {
  if (!date) return;
  if (!format)
    format = "yyyy-MM-dd";
  switch (typeof date) {
  case "string":
    date = new Date(date.replace(/-/, "/"));
    break;
  case "number":
    date = new Date(date);
    break;
  }
  if (!date instanceof Date) return;
  var dict = {
    "yyyy" : date.getFullYear(),
    "M" : date.getMonth() + 1,
    "d" : date.getDate(),
    "H" : date.getHours(),
    "m" : date.getMinutes(),
    "s" : date.getSeconds(),
    "MM" : ("" + (date.getMonth() + 101)).substr(1),
    "dd" : ("" + (date.getDate() + 100)).substr(1),
    "HH" : ("" + (date.getHours() + 100)).substr(1),
    "mm" : ("" + (date.getMinutes() + 100)).substr(1),
    "ss" : ("" + (date.getSeconds() + 100)).substr(1)
  };
  return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {
    return dict[arguments[0]];
  });
}
 //根据id分组
export function groupById( array , f ) {
  let groups = {};
  array.forEach( function( o ) {
    let group = JSON.stringify( f(o) );
    groups[group] = groups[group] || [];
    groups[group].push( o );
  });
  return Object.keys(groups).map( function( group ) {
    return { id: groups[group][0].id ,data: groups[group]};
  });
}
// 数字千分位逗号分隔
export function format (num) {
  return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}
//获取字符串长度
export function len(s) { //汉字占两位
  var l = 0;
  var a = s.split("");
  for (var i = 0; i < a.length; i++) {
    if (a[i].charCodeAt(0) < 299) {
      l++;
    } else {
      l += 2;
    }
  }
  return l;
}
// json数组去重
export function uniqueArray(array,key) {
  var result = [array[0]];
  array.forEach(item => {
    var repeat = false;
    result.forEach(items => {
      if (items[key] == item[key]) {
        repeat = true;
        return false;
      }
    })
    if (!repeat) {
      result.push(item);
    }
  })
  return result;
}
//时间格式化
Date.prototype.format = function(fmt) { 
  var o = { 
    "M+" : this.getMonth()+1,
    "d+" : this.getDate(),
    "h+" : this.getHours(), 
    "m+" : this.getMinutes(),
    "s+" : this.getSeconds(), 
    "q+" : Math.floor((this.getMonth()+3)/3),
    "S"  : this.getMilliseconds()
 }; 
 if(/(y+)/.test(fmt)) {
  fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
 }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
 return fmt;
}