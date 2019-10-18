Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具

 

### 一、下载 ###


电脑环境：Windows 10 Enterprise, 64-bit Operating System

Notepad++: [Notepad++ 7.8 release (32-bit x86)](https://notepad-plus-plus.org/downloads/v7.8/)

Emmet: [下载地址](https://github.com/emmetio/npp)

PythonScript: [下载地址](https://sourceforge.net/projects/npppythonscript/)

PluginManager: [下载地址](https://github.com/bruderstein/nppPluginManager/releases)

 

 

### 二、安装 ###

1. 下载好所需的notepad++文件后,一顿“同意”，"下一步"，“是” ，操作猛如虎，安装完成notepad++.

2. 打开notepad++的安装目录，默认是 C:\Program Files (x86)\Notepad++ (32位)，C:\Program Files\Notepad++(64位)，你也可以通过notepad++菜单栏的Plugins->OpenPlugins Folder... 
直接进入到 plugins 文件夹，将下载的插件解压拷贝到这（PluginManager解压之后只有一个DLL文件，直接拷贝到C:\Program Files\Notepad++\Plugins可能不好使，可以新建一个跟DLL同名的PluginManager文件夹，把DLL文件放进去）。

3. 重启notepad++ 之后，在菜单栏的Plugins下就可以看到你新添加的插件

 

### 三、使用 ###

打开文档，输入 html:5 键盘按下CTRL+E 立马生成一大段代码


```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

body 标签中输入：div#header>(h1.logo>a)+ul.nav>li.item*5>a 键盘按下CTRL+E，又是一大堆。


```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="header">
        <h1 class="logo"><a href=""></a></h1>
        <ul class="nav">
            <li class="item"><a href=""></a></li>
            <li class="item"><a href=""></a></li>
            <li class="item"><a href=""></a></li>
            <li class="item"><a href=""></a></li>
            <li class="item"><a href=""></a></li>
        </ul>
    </div>
</body>
</html>
```

这个效率杠杠的，具体写法可以在[这里](https://www.w3cplus.com/blog/32.html)看到，当然有很多很详细的文章介绍，这里只是抛个砖。

### 四、问题 ###

1.快捷键冲突

写好代码，激动的按下CTRL+E, 当当当.... EOQ 什么鬼,没有这个命令？

菜单栏Plugins->Emmet->Expand abbreviation(展开缩写)，快捷键是 CTRL+ALT+Enter.

好吧， CTRL+ALT+Enter再来一遍，嗯？电脑卡了吗？报错了吗？没按对吗？怎么没反应？

试试鼠标点击 Expand abbreviation 按钮， 咦，好使！

应该是快捷键冲突了， 菜单栏Settings->Shortcut mapper...->Plugin commands 快捷键背景红色，换掉快捷键->Ctrl+E

收拾好心情，CTRL+E, 走你

2. 死活不好使

安装步骤都根据说的走完了，结果菜单栏Plugins根本没有emmet，Plugin Manager 选项，可以试试把插件的DLL文件放在外面(直接在C:\Program Files (x86)\Notepad++\plugins下)

### 五、 结语 ###

系统、软件的版本有时都会对插件的安装造成影响，切记不急不躁，耐心查找，仔细思考。

好好学习，天天向上！
