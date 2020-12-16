## 调试nuxt项目的api(server)

1. 配置launch.json
```
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [

    {
        "type": "node",
        "request": "attach",
        "name": "调试nuxt",
        "processId": "${command:PickProcess}",
        "port": 9229 // 默认端口
    }
  ]

}
```

2. 启动项目 `npm run dev`
3. F5或debug模式下点击绿箭头运行，出现`pick the node.js to attach to` 选择当前启动的项目入口js文件
4. 在必要的地方添加`debugger`


### reference
[nodejs调试指南](https://blog.csdn.net/weixin_33941350/article/details/91386530)
