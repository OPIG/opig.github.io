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