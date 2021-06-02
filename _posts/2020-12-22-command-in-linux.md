---
tag: linux
---

## Command in Linux

#### 1. vim格式对齐  
[vim格式对齐命令](https://blog.csdn.net/yygydjkthh/article/details/45210099)  

gg（把关标定位到最上面），V（进入VISUAL模式），shift+g（选中整篇文本），然后＝。


#### 2. 切换角色     
`sudo -i` 切换到root角色

`cd /etc/nginx/conf.d/`

#### 3. 多行复制  
非编辑模式下(esc后)：nyy  
粘贴 p

#### 4. 批量输入  
非编辑模式下(esc后)ctrl+V  -> J(或者方向键)选中多行 --> shift+i 切换到编辑模式--> 写入要添加的内容 --》 多次点击esc完成内容插入 --》shift+Z+Z保存退出

#### 5. dd删除整行

#### 6. `netstat -anltp|grep -i list`  查看占用端口及进程Id（如21834）

`ps -ef|grep 21834` 根据进程ID查服务

##### windows 查看端口号占用情况 
`netstat -aon | findstr 80[端口号]`
##### windows 查看进程Id（如5444） 
`tasklist | findstr 5444`


#### 7. `ps -C nginx -o pid` 查看到进程ID(如2253215)

`ll /proc/2253215` 根据进程ID查看具体操作(cwd进入的文件， exe执行的操作)

#### 8. [`chmod u+x [fileName]` 分配权限](https://www.cnblogs.com/Berryxiong/p/6193866.html)
  `chmod ［who］ ［+ | – | =］ ［mode］ 文件名`
  操作对象who可是下述字母中的任一个或者它们的组合：
    u 表示“用户（user）”，即文件或目录的所有者
    g 表示“同组（group）用户”，即与文件属主有相同组ID的所有用户
    o 表示“其他（others）用户”。
    a 表示“所有（all）用户”。它是系统默认值

  操作符号可以是：
    + 添加某个权限
    – 取消某个权限
    = 赋予给定权限并取消其他所有权限（如果有的话）

  设置mode所表示的权限可用下述字母的任意组合：
    r 可读 4
    w 可写 2
    x 可执行 1

    for example:
    1. `$ chmod a+x sort`   
    即设定文件sort的属性为：   
    文件属主（u） 增加执行权限   
    与文件属主同组用户（g） 增加执行权限   
    其他用户（o） 增加执行权限   

    2. `$ chmod ug+w，o-x text`   
    即设定文件text的属性为：
    文件属主（u） 增加写权限   
    与文件属主同组用户（g） 增加写权限   
    其他用户（o） 删除执行权限   


#### chgrp命令   
  功能：改变文件或目录所属的组。

  语法：chgrp ［选项］ group filename

#### chown 命令   
  功能：更改某个文件或目录的属主和属组。这个命令也很常用。例如root用户把自己的一个文件拷贝给用户yusi，为了让用户yusi能够存取这个文件，root用户应该把这个文件的属主设为yusi，否则，用户yusi无法存取这个文件。

  语法：chown ［选项］ 用户或组 文件

  说明：chown将指定文件的拥有者改为指定的用户或组。用户可以是用户名或用户ID。组可以是组名或组ID。文件是以空格分开的要改变权限的文件列表，支持通配符。


#### 查看防火墙开放的端口
`firewall-cmd --list-all`

#### 设置防火墙开放的端口
`firewall-cmd --add-service=http --permanent`
`sudo firewall-cmd --add-port=27017/tcp --permanent`

#### 重启防火墙
`firewall-cmd --reload`


