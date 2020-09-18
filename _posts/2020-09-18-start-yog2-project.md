## yog2创建Hello World项目step by step

第一遍看[yog2的官网](http://fex.baidu.com/yog2/docs/)的入门指引有点迷糊，项目搭建完启动后
```
在浏览器访问 http://127.0.0.1:8085 出现的是cannot get, 命令行里也显示router【home】is missed 
```
我成功启动Hello World项目的步骤如下：

1. 首先安装yog2 
```
npm install -g yog2
```

2. 创建project 
```
yog2 init project
# prompt: Enter your project name:  (yog)
```

3. 创建app
首先进入刚刚创建的yog项目然后创建app
```
cd yog
yog2 init app
# prompt: Enter your app name:  (home)
```
4. 安装依赖包
回到yog根目录
```
cd ..
npm install
```

5. 启动yog项目/框架
```
yog2 run
```
yog2 project 的默认端口是 8085，你可以通过修改 PORT 环境变量或者直接修改 app.js 来指定端口。

此时如果我们访问 http://127.0.0.1:8085 由于我们并未部署应用，我们只会得到一个 404 页面(我得到的是cannot get)。因此下一步我们就需要部署 app。

进入到创建的app目录下（也就是home文件夹，如果`yog2 init app`的时候使用的是默认home文件名的话）
```
cd home
yog2 release --dest debug
```
yog2 release –dest debug 必须要求运行框架以调试模式启动后使用，否则无法正确的部署代码。

再次访问 http://127.0.0.1:8085 我们就会看到网站已经正常提供服务了。 
```
Hello World!
```

此外，如果我们在执行 yog2 release 命令时添加 --watch 参数，yog2 就会监听文件修改，并自动部署至 yog2 project 。通过 yog2 的热更新技术，只要是 app 中的代码，无论是静态资源还是后端模板亦或是后端逻辑，均无需重启 yog2 project 就可以生效。

```
yog2 release --dest debug --watch
```

### Note: 如果你的app不是用的默认名字home，上面流程走完后(上面的home替换成你的app名字)启动项目访问地址应该为`http://127.0.0.1:8085/你的app名字`. 或者也可以在
`project根目录\conf\plugins\dispatcher.js`中修改defaultRoute 为你的app名字，这样重新`yog2 run`可以访问`http://127.0.0.1:8085/`

### reference 
YOG2 [http://fex.baidu.com/yog2/docs/](http://fex.baidu.com/yog2/docs/)
