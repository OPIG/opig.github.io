---
tag: linux
---

## Command in Linux

1. vim格式对齐  
[vim格式对齐命令](https://blog.csdn.net/yygydjkthh/article/details/45210099)  
gg（把关标定位到最上面），V（进入VISUAL模式），shift+g（选中整篇文本），然后＝。


2. 切换角色  
`sudo -i` 切换到root角色

cd /etc/nginx/conf.d/

3. 多行复制  
非编辑模式下(esc后)：nyy  
粘贴 p

4. 批量输入  
非编辑模式下(esc后)ctrl+V  -> J(或者方向键)选中多行 --> shift+i 切换到编辑模式--> 写入要添加的内容 --》 多次点击esc完成内容插入 --》shift+Z+Z保存退出

5. dd删除整行

6. netstat -anltp|grep -i list  查看占用端口及进程Id（如21834）
`ps -ef|grep 21834` 根据进程ID查服务

7. ps -C nginx -o pid 查看到进程ID(如2253215)
`ll /proc/2253215` 根据进程ID查看具体操作(cwd进入的文件， exe执行的操作)





