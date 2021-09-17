---
tags: ['interview']
---

https://interview.codespring.top/webpack/improve_build.html

[JavaScript 面试核心考点(精华)](https://www.cnblogs.com/abc-x/p/11161374.html)

this 指向问题汇总：
![install-command-img](../../assets/img/this-js.jpg)

[浅析 JavaScript 解析赋值、浅拷贝和深拷贝的区别](https://www.cnblogs.com/chengxs/p/10788442.html)

|        | 和原数据是否指向同一对象 | 第一层数据为基本数据类型 | 原数据中包含子对象       |
| ------ | :------------------------: | :------------------------: | :------------------------: |
| 赋值   | 是                       | 改变会使原数据一起改变   | 改变会使原数据一起改变   |
| 浅拷贝 | 否                       | 改变不会使原数据一起改变 | 改变会使原数据一起改变   |
| 深拷贝 | 否                       | 改变不会使原数据一起改变 | 改变不会使原数据一起改变 |


JSON.parse(JSON.stringify(str)) 深拷贝的问题：

（1）会忽略 `undefined`

（2）会忽略 `symbol`

（3）不能序列化函数

（4）不能解决循环引用的对象

（5）不能正确处理`new Date()`, 转换结果不正确,解决方法转成字符串或者时间戳就好了

（6）不能处理正则


[html常见面试题及答案]<https://blog.csdn.net/weixin_45102270/article/details/113064446> 什么是微格式，html5离线缓存， 拖拽释放(Drag and drop) API

---
### 跨域问题
[彻底弄懂jsonp原理及实现方法]<https://www.cnblogs.com/soyxiaobi/p/9616011.html>

---
### reference

[前端笔试算法题,提高笔试存活率！(持续更新)]<https://www.cnblogs.com/soyxiaobi/p/9426168.html>
[前端如何应对笔试算法题?(用node编程)]<https://www.cnblogs.com/soyxiaobi/p/9384585.html>
[前端开发面试题]<https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers>

前端学习网站推荐
1. 极客标签：     http://www.gbtags.com/

2. 码农周刊：     http://weekly.manong.io/issues/

3. 前端周刊：     http://www.feweekly.com/issues

4. 慕课网：       http://www.imooc.com/

5. div.io：		 http://div.io

6. Hacker News： https://news.ycombinator.com/news

7. InfoQ：       http://www.infoq.com/

8. w3cplus：     http://www.w3cplus.com/

9. Stack Overflow： http://stackoverflow.com/

10. w3school：    http://www.w3school.com.cn/

11. mozilla：     https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

文档推荐

[jQuery 基本原理]<http://docs.huihoo.com/jquery/jquery-fundamentals/zh-cn/index.html>

[JavaScript 秘密花园]<http://bonsaiden.github.io/JavaScript-Garden/zh/>

[CSS参考手册]<http://css.doyoe.com/>

[JavaScript 标准参考教程]<http://javascript.ruanyifeng.com/>

[ECMAScript 6入门]<http://es6.ruanyifeng.com/>
