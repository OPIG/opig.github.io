---

---

## use Manjaro
### start   

1. download Manjaro here <https://manjaro.org/download/>
2. download and install VM
3. (optional)使用管理员权限运行命令：bcdedit /set hypervisorlaunchtype off。对应的打开Hyper-V的命令：bcdedit /set hypervisorlaunchtype auto。
4. 启动虚拟机键盘按`e`， set `drive=free` to `drive=intel` press `F10` to skip long waiting during install drive
5. duplicate next operate to finish install


### Install Vmtool 
实现虚拟机与物理机共享粘贴板, 这里需要安装vmware-tools
`sudo pacman -R open-vm-tools`  

`git clone https://github.com/rasa/vmware-tools-patches.git`

```
cd vmware-tools-patches   

sudo ./patched-open-vm-tools.sh
```

### Install Vim
`sudo pacman -S vim`

### switch server source 修改源1

```
sudo pacman -Syy

sudo pacman -Syyu

sudo pacman-mirrors -i -c China -m rank # 配置国内源


```

`sudo pacman -S base-devel` 
不带devel后缀的package，通常只包含能让程序运行的动态库和配置文件。而带devel后缀的package，则包含使用这个package开发程序的所有的必需文件。比如头文件，等等。有时devel package还包含静态库。

### check ip address:
`ip addr`

### turn on ssh
```
systemctl enable sshd.service 开机启动 

systemctl start sshd.service 立即启动   

systemctl restart sshd.service 立即重启   

```

### 屏幕自适应

`sudo mhwd -a pci free 0300`

### switch server source 修改源2

`sudo vim /etc/pacman.conf`

for example: 更换为为中科大arch软件源
```
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```

### 安装zsh(比bash控制台更丰富的智能提示)
`sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
### 常用pacman命令

```
pacman -S  软件名    #安装
pacman -Syu         #更新
pacman -R 软件名     #移除
```

### 安装vscode

`sudo pacman -S code`

### 安装nvm, nrm, 添加代码源
```
sudo pacman -S nvm

根据提示执行 echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.bashrc 重启完成nvm安装

nvm install [node版本号，如：14.8]

npm i -g nrm

nrm add [名称] 地址

```

### 安装python2.7

`sudo pacman -S python2`

### 安装chrome

`sudo pacman -S google-chrome`

### 安装markdown编辑器

`sudo yaourt typora`

### 安装pdf阅读器

`sudo yaourt foxit`

### 安装git客户端

`sudo yaourt GitKraken`

### 安装下载工具 uget

`sudo yaourt -S uget `

### 安装视频播放器

`sudo yaourt -S mpv`

### 安装zsh

```
#最新版本已经默认安装了。
sudo pacman -S zsh
# 安装oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
# 更换默认的shell
chsh -s /bin/zsh

```

### 安装截图

`sudo pacman -S deepin-screenshot`

### 安装TIM

`sudo pacman -S deepin-wine-tim`

### 安装网易云音乐 

`sudo pacman -S netease-cloud-music`

### steam是自带软件, 如果启动不成功, 可以补一个包steam-native-runtime

`sudo pacman -S steam-native-runtime`

### Reference 
[Manjaro折腾全记录]<https://www.jianshu.com/p/21c39bc4dd31>
[【Hyper-V】与【VirtualBox】【VMware】冲突的解决方法]<https://blog.csdn.net/qwsamxy/article/details/50533007/>
[manjaro 切换国内源及软件安装]<https://www.jianshu.com/p/2d096cd9ad61?utm_source=wechat_session>



## 安装python虚拟运行环境，linux下轻松切换python2和python3
一、查询系统采用的python版本

$ python --version
Python 3.7.3
系统采用的python版本为3.7.3
以下查询py3和py2的目录：
```
$ which python3.7
/usr/bin/python3.7
$ which python2.7
/usr/bin/python2.7
```

二、安装python虚拟运行环境
pip安装
`sudo pip install virtualenvwrapper`

上述工具装好后，需要执行以下环境变量设置。

1.创建目录用来存放虚拟环境
`mkdir $HOME/.virtualenvs`
2.在~/.bashrc中添加行：
```
export WORKON_HOME=$HOME/.virtualenvs
source /usr/bin/virtualenvwrapper.sh
```
3.运行:
`source ~/.bashrc`

三、创建python虚拟环境

当你需要使用Python2开发项目时，建立一个Python2的虚拟环境：

`mkvirtualenv -p /usr/bin/python2.7 env27`

当你需要Python3开发时：

`mkvirtualenv -p /usr/bin/python3.7 env37`

然后可以随时切换不同的虚拟环境：

`workon env27` # 进入Python2环境
`workon env37` # 进入Python3环境

不仅可以自由切换py2和py3，同一个版本下还可以配置不同的依赖，pip不同的包，来适应不同项目的需求。

更爽的是，你可以在进入虚拟环境的同时切换到项目目录，只需要编辑 `$VIRTUAL_ENV/bin/postactivate` 这个文件即可：

`vim $VIRTUAL_ENV/bin/postactivate` #前提是已经进入对应的虚拟环境

在文件中添加切换目录的命令：

`cd /path/to/your/project`

四、退出虚拟环境 离开 deactivate

五、删除虚拟环境的命令 
```
rmvirtualenv 虚拟环境名称

例 ：删除虚拟环境py3_flask

先退出：deactivate

再删除：rmvirtualenv py3_flask
```

六、如何在虚拟环境中安装工具包?

提示 : 工具包安装的位置 :

python2版本下：

`~/.virtualenvs/py_flask/lib/python2.7/site-packages/`

python3版本下：

`~/.virtualenvs/py3_flask/lib/python3.5/site-packages`

python3版本下安装flask-0.10.1的包 :

`pip install 包名称`

例 : 安装flask-0.10.1的包

`pip install flask==0.10.1`

查看虚拟环境中安装的包 :

`pip freeze`