---
title: Tomcat
category: [java]
---

# <center>Tomcat</center>

## What's Tomcat
> Tomcat is an application server from the Apache Software Foundation that executes Java servlets and renders Web pages that include Java Server Page coding. Described as a "reference implementation" of the Java Servlet and the Java Server Page specifications, Tomcat is the result of an open collaboration of developers and is available from the Apache Web site in both binary and source versions. Tomcat can be used as either a standalone product with its own internal Web server or together with other Web servers, including Apache, Netscape Enterprise Server, Microsoft Internet Information Server (IIS), and Microsoft Personal Web Server. Tomcat requires a Java Runtime Enterprise Environment that conforms to JRE 1.1 or later.
Tomcat is one of several open source collaborations that are collectively known as Jakarta.


## Install Tomcat
1. Go to official [website](http://tomcat.apache.org/), download Tomcat you need.
2. Config Environment Variables
  - Go to desktop, find Computer or This PC, right click, then choose Properties
  - Choose Advanced system settings on the left, pop up System Properties window, then choose Environment Variables.
  - Add new System Variable named: `CATALINA_HME` and Variable value is the Tomacat path you made.
  - Edit `Path` in System Variables, add `%CATALINA_HME%\bin`(if needed, you need to add semicolon at the end of the variable you added)
3. Navigate to Tomcat/bin folder, open cmd as Administrator, exec `service.bat install` command to install Tomcat.
4. The last thing you need to do is start Tomcat service
  - Also navigate to Tomcat/bin folder, double click `startup.bat` or `catalina.bat` or `tomcat*.exe`, etc.
5. You can navigate to Tomcat/conf folder find `server.xml` to update http port (default port is  8080)
6. open browser input `localhost://[your http port]` to browser Tomcat default page, also you can put your project under `Tomcat/webapps`.
7. put your project under `Tomcat/webapps`, then you need to configure `server.xml`. add `<Context path="/[visit path]"	docBase="[relative path,default current path is webapps ]"  reloadable="true"/>` under `<Host>`
  
## start Tomcat
if you successfully installed Tomcat, every time you want to use Tomcat is only need to start Tomcat service(navigate to Tomcat/bin folder, double click `startup.bat` or `catalina.bat` or `tomcat*.exe`, etc.)


## references
[https://blog.csdn.net/weixin_42109012/article/details/94383001](https://blog.csdn.net/weixin_42109012/article/details/94383001)

---

# <center>JDK</center>

## What's JDK
JDK include JRE

## Install JDK
1. Go to official [website](https://www.oracle.com/technetwork/java/javase/downloads/index.html), download JDK you need.
2. Double click JDK package you downloaded,click next to install(you can customize your install path)
3.  Config Environment Variables
  - Go to desktop, find Computer or This PC, right click, then choose Properties
  - Choose Advanced system settings on the left, pop up System Properties window, then choose Environment Variables.
  - Add new System Variable named: `JAVA_HOME` and Variable value is the Tomacat path you made.
  - Edit `Path` in System Variables, add `%JAVA_HOME%\bin`(if needed, you need to add semicolon at the end of the variable you added)
4. Run cmd, input `java -version` or `javac -version` to valify java install successfully or not and check java version. 

## Uninstall JDK
1. open control panel, uninstall Java
2. also you may need to delete regedit.

---

# <center>Redis</center>

## What's Redis

## Install redis
1. Go to [website](https://github.com/microsoftarchive/redis/releases) download redis you need(ps: different environment need different redis,like linux, window)
2. extract zip file you download, navigate to root path, run `cmd->redis-server.exe` start redis service.if you see redis login in the window, it shows redis install successfully.
2. run another cmd, input `redis-cli.exe` then you can get connect to server.
3. if you close the cmd window, the redis service will closed, hence if you want to put redis service into window service, then you can: `cmd->redis-server.exe --service-install redis.windows.conf --loglevel verbose`, the last parameter `--loglevel verbose` means log level. after run this cmd, you will see redis service in window services list(Window+R->services.msc)
`redis-server --service-install redis.windows.conf --loglevel verbose`

## Issue in redis
>  Invalid argument during startup: Failed to open the .conf file: 
   verbose CWD=C:\developer\redis....<br/>  
   Solve: `redis-server --service-install redis.windows.conf --loglevel verbose`
   
> creating server tcp listening socket *:6379: listen: unknown error.<br/>
  Solve: configure `redis.windows.conf`, remove '#' before `bind 127.0.0.1`
## uninsatll redis
* `redis-server --service-uninstall`.
* `cmd->redis->\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\`, delete `redis`.

## common cmd in redis
* uninstall service: `redis-server --service-uninstall`
* start service: `redis-server --service-start`
* stop service: `redis-server --service-stop`
* `redis-cli shutdown`
* rename sercie: `redis-server --service-name name`

easy pattern: `redis-cli.exe`
specified pattern: `redis-cli.exe -h 127.0.0.1 -p 6379 -a requirepass` (also, you can re-change password in `redis.windows.conf`)

## Redis Desktop Manager
[https://redisdesktop.com/download](https://redisdesktop.com/download)
## references
[https://blog.csdn.net/u011277123/article/details/78692603/](https://blog.csdn.net/u011277123/article/details/78692603/)
[https://blog.csdn.net/weixin_43953753/article/details/86019883](https://blog.csdn.net/weixin_43953753/article/details/86019883)
[https://www.cnblogs.com/dingguofeng/p/8709476.html](https://www.cnblogs.com/dingguofeng/p/8709476.html)
[https://blog.csdn.net/wu_zongwen/article/details/80318916](https://blog.csdn.net/wu_zongwen/article/details/80318916)

