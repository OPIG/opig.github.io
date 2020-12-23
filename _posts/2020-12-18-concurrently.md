---
tag: [packgage.json]
---

concurrently 可以同时启动client 和 server两个项目

如果目录结构如下（concurrently 配置在子目录中）

 - root
	- server
		- server_package.json
		- server.js
	root_package.json
	

server_package.json的配置如下
```json
	
	"start": "nodemon server.js",
    "dev": "concurrently \" npm run start \" \" npm run JSONServer \"",
    "JSONServer": "cd .. & npm run client"
	
```
**注意** *cd .. & npm run client* 这个命令通过`&` 符号连接了两个命令

root_package.json配置如下
``` json

	"client": "npm run serve",
    "serve": "vue-cli-service serve",
```


导航到server文件夹下通过 `npm run dev`命令启动两个项目


===	
	
如果目录结构如下（concurrently 配置在父目录中）

 - root
	- server
		server_package.json
		server.js
	root_package.json
	

server_package.json的配置如下

```json

	"start": "node server.js",
    "server": "nodemon server.js"
	
```

root_package.json配置如下
``` json

    "build": "vue-cli-service build",
    "start": "vue-cli-service serve"
	"server_start": "npm start --prefix server",
    "start": "node server.js",
    "dev": "concurrently \"npm run server_start\" \"npm run start\""
```

**注意：** `--prefix server` 指的是当前目录中server目录