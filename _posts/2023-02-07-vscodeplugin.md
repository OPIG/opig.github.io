---
title: vscode plugin
tags:
  - vscode plugin
  - vscode
  - plugin
author: Atom
excerpt:  >
  vscode plugin.
---
# package.json

## 创建侧边栏的icon项

```json

"contributes": {
  "viewsContainers": {
        "activitybar": [
          {
            "id": "id名如active-explorer",
            "title": "鼠标悬浮的文字",
            "icon": "图标路径"
          }
        ]
      },
  "views": {
        "activitybar中一样的id名active-explorer": [
           {
          "id": "唯一id名",
          "name": "名称",
          "icon": "media/images/ui.case.logo.png",
          "contextualTitle": "UICase Explorer"
        },
        {
          "id": "另一个唯一id名",
          "name": "名称",
          "visibility": "collapsed"
        }
        ],
  }
}

```




