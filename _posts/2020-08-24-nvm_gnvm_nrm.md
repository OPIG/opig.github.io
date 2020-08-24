### 使用nvm(Node Version Manager)可以方便的在同一台设备上进行多个node版本之间切换，解决不同的项目所使用的node版本不一样的问题 

#### nvm 下载安装
  1.下载傻瓜式安装 [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
  
  2.在git中安装 `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`
  

#### nvm配置
nvm的安装目录，有一个settings.txt文件，打开之后把下面的代码复制进去
```
arch: 64 
proxy: none 
node_mirror: http://npm.taobao.org/mirrors/node/ 
npm_mirror: https://npm.taobao.org/mirrors/npm/
```
#### nvm 使用
```
nvm ls[list]查看已经安装的node版本
nvm install node版本号 （默认是64位，如果需要32位，在版本号后面添加空格输入32）
nvm use node版本号
npm -v
node -v
```
#### note:
如果不好使，记得配置系统环境变量


### GNVM 是一个简单的 Node.js 多版本管理器，类似 nvm nvmw nodist 。

### Reference:

  教你如何使用nvm [https://www.jianshu.com/p/f8e175403dfb](https://www.jianshu.com/p/f8e175403dfb)

  同一台电脑管理多个node版本 [https://blog.csdn.net/illa123/article/details/88988322](https://blog.csdn.net/illa123/article/details/88988322)

  node npm nrm nvm gnvm 相爱相杀 [https://blog.csdn.net/qq_24147051/article/details/80526779](https://blog.csdn.net/qq_24147051/article/details/80526779)





### npm 
查看当前npm的镜像：`npm config get registry`

设置淘宝的镜像:`npm config set registry https://registry.npm.taobao.org`, 切换回来`npm config set registry https://registry.npmjs.org`

### cnpm 
淘宝团队做的国内镜像，因为npm的服务器位于国外可能会影响安装。淘宝镜像与官方同步频率目前为 10分钟 一次以保证尽量与官方服务同步
#### cnpm 安装 `npm install cnpm -g --registry=https://registry.npm.taobao.org`

### nrm
nrm能够管理所用可用的镜像源地址以及当前所使用的镜像源地址，但是只是单纯的提供了几个url并能够让我们在这几个地址之间方便切换
#### nrm 安装`npm i nrm -g`
#### nrm使用
```
nrm ls[list]查看所有可用的镜像
nrm use XXX[taobao]切换到对应的镜像
```


#### `-g -S -D`

`-g`：全局安装。 将会安装在`C:\Users\XXX\AppData\Roaming\npm`，并且写入系统环境变量；非全局安装：将会安装在当前定位目录;全局安装可以通过命令行任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，通过要求调用;

`-S`：即`npm install module_name --save`,写入package.json的dependencies ,dependencies 是需要发布到生产环境的，比如jq，vue全家桶，ele-ui等ui框架这些项目运行时必须使用到的插件就需要放到dependencies

`-D`：即`npm install module_name --save-dev`,写入package.json的devDependencies ,devDependencies 里面的插件只用于开发环境，不用于生产环境。比如一些babel编译功能的插件、webpack打包插件就是开发时候的需要，真正程序打包跑起来并不需要的一些插件。
为什么要保存在package.json 因为node_module包实在是太大了。用一个配置文件保存，只打包安装对应配置文件的插件，按需导入。

### Reference:
npm 和 cnpm [https://www.jianshu.com/p/115594f64b41](https://www.jianshu.com/p/115594f64b41)
