### 前端ajax请求后端的图片验证码出错

#### 遇到一个问题是，获取从后端的图片验证码出错了，错误分为两种情况，一是获取不到内容(ajax不走done方法也不走fail方法，甚至always方法也不走)。 二是获取到图片验证码出现乱码情况，验证码不能在前台展示。

我使用的JQuery版本是3.2.1代码如下，可以正常请求到验证码。但是当我把这个代码移植到另一个项目之后发现ajax的done方法也不走fail方法，甚至always方法也不走，我改成使用success方法也还是不走，起先我以为是因为
我是在另一个ajax方法中调用getVerifyCode方法引起的，但是单独请求这个getVerifyCode方法也还是一样的情况，后来尝试把
```
xhrFields: {
  responseType: 'blob'  //接收文件类型为blob
}
```
从这个ajax方法中移除掉后是可以走到done方法的，但是res是data:image/png; base64乱码的格式， 我在done方法中创建blob对象
```
.done(res){
   var url = window.URL || window.webkitURL;
   var blob = new Blob([res]); /*也尝试了 var blob = new Blob([res],{type:'image/png'});等修改type类型*/
   $('.img-authcode').attr('src', url.createObjectURL(blob))
   $('.authcode').show()
 }
```
也还是可以进入done方法，img标签拿到blob:http的地址但是不能展示出图片。

本来直接引入高版本的jQuery也是可以解决问题，但是怎么说呢，能不引入新文件解决问题还是最好的。所以还得死磕一下。

后来，调试的过程中看到jquery中创建了xhr对象去调用ajax方法，也看到有人说用原生的XMLHttpRequest可行，所以试了 var xhr = new XMLHttpRequest();确实好使。代码在最底部。

所以综上，还是得去了解底层代码，不然遇到问题都不知道错误在什么地方。


```
JQUery 3.2.1 成功获取验证码
/** 获取验证码 */
	function getVerifyCode(mobile) {
		var postUrl = baseUrl + '/api/verificationCode?mobile=' + mobile;
		$.ajax({
			url: postUrl,
			type: 'GET',
			xhrFields: {
				responseType: 'blob'  //接收文件类型为blob
			}
		}).done(function (res) {
			var url = window.URL || window.webkitURL;
			$('.img-authcode').attr('src', url.createObjectURL(res))
			$('.img-authcode-box').show()
		}).fail(function (err) {
			showError('网络繁忙，请稍后重试')
		})
	}

```

```
jQuery1.11.3 成功获取验证码

function getVerifyCode(mobile) {
        var postUrl = baseUrl + '/api/verificationCode?mobile=' + mobile;
        var $img = $('.img-authcode'); //接收验证码的img标签
        var $imgBox = $('.img-authcode-box');//存放验证码img标签的父级元素
        var windowUrl = window.URL || window.webkitURL;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', postUrl, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            if (this.status == 200) {
                var blob = this.response;
                $img.load(function (e) {
                    windowUrl.revokeObjectURL($img.src);
                }).attr("src", windowUrl.createObjectURL(blob));

                $imgBox.show();
                needVerifyCode = true;
            } else {
                //错误信息
            }
        }
        xhr.send();
    }
    
````
