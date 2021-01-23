function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数
  if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
}


//参数1、低版本//参数2、本页面//参数3、高版本页面
function isBrowser(href, curHref, heiHref) {
  //升级浏览器area
  var browser = {
      ua: navigator.userAgent.toLowerCase(),
      msie: function () {
          return /msie/.test(this.ua);
      },
      ie6: function () {
          var self = this;
          return self.msie() && /msie 6./.test(self.ua);
      },
      ie7: function () {
          var self = this;
          return self.msie() && /msie 7.0/.test(self.ua);
      },
      ie8: function () {
          var self = this;
          return self.msie() && /msie 8.0/.test(self.ua);
      }
  };
  if (browser.ie6() || browser.ie7()) { 
      if (curHref != href)
          location.href = href;
  }
  else {
      if (curHref != heiHref)
          location.href = heiHref;
  }
}


function getcookie(key){
  var arr1=document.cookie.split("; ");
  for(var i=0;i<arr1.length;i++){
    var arr2=arr1[i].split("=");
    if(arr2[0]==key){
      return decodeURI(arr2[1]);
    }
  }
}


function setcookie (key, value, expireHours) {

  let cookieString = key + '=' + escape(value) + '; path=/'
  //判断是否设置过期时间
  if (expireHours > 0) {
    let date = new Date()
    date.setTime(date.getTime() + expireHours * 3600 * 1000)
    cookieString = cookieString + '; expire=' + date.toGMTString()
  }
  document.cookie = cookieString

}


function objectMerge (target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  for (const property in source) {
    if (source.hasOwnProperty(property)) {
      const sourceProperty = source[property]
      if (typeof sourceProperty === 'object') {
        target[property] = objectMerge(target[property], sourceProperty)
        continue
      }
      target[property] = sourceProperty
    }
  }
  return target
}


function isEmptyObject (obj) {
  for (let key in obj) {
    return false
  }
  return true
}

function isWechatBrowser () {
  return navigator.userAgent.toLowerCase().match(/micromessenger/i) == "micromessenger";
}

function isAndroidBrowser () {
  const u = navigator.userAgent
  return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;;
}

function isIOSBrowser () {
  return navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}