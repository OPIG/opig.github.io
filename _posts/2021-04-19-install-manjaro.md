---

---

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
sudo pacman-mirrors -i -c China -m rank
sudo pacman -Syyu

```
### switch server source 修改源2

`sudo vim /etc/pacman.conf`

for example: 更换为为中科大arch软件源
```
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```


### 常用pacman命令

```
pacman -S  软件名    #安装
pacman -Syu         #更新
pacman -R 软件名     #移除
```

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
