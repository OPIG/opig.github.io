
# Add wechat mock device into chrome
## steps
1. F12(open the browser devTool)
2. click `Toggle device tool bar`(switch to mobile mode)
3. expand the device dropdown list, then click `Edit` button
4. pop up `setting` dialog, click `Devices` item and click `Add custom device` under `Emulated Devices`
5. input Device name(whatever name you give), and input the `UA`(user agent string) as below.
6. click `Add` button then done.

## 更改User agent（用户代理）： 
### 安卓微信UA： 

`mozilla/5.0 (linux; u; android 4.1.2; zh-cn; mi-one plus build/jzo54k) applewebkit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 micromessenger/5.0.1.352`  

### Ios微信UA：

`mozilla/5.0 (iphone; cpu iphone os 5_1_1 like mac os x) applewebkit/534.46 (khtml, like gecko) mobile/9b206 micromessenger/5.0`


## reference
[chrome 设置安卓微信和IOS微信UA方法](https://blog.csdn.net/mr_yanyan/article/details/80640639)
[chrome调试微信网页](https://www.cnblogs.com/ZQ1437487263/p/13590233.html)
