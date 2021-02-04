---
title: for in 和for of的区别
category: [javascript]
tags: 
 - js
excerpt: 'ES5的话也可以使用<font color="red">forEach</font>，ES5具有遍历数组功能的还有map、filter、some、every、reduce、reduceRight等，只不过他们的返回结果不一样。但是使用foreach遍历数组的话，使用break不能中断循环，使用return也不能返回到外层函数。'
---

# <center color="red">for in 和 for of 的区别</center>

===

### 1. 遍历数组通常用 for 循环



其实这几个方法之间的差异主要在`属性是否可可枚举`，是来自`原型`，还是`实例`。

| 方法                      | 适用范围                                  | 描述                                                           |
| ------------------------- | ----------------------------------------- | -------------------------------------------------------------- |
| for..in                   | 数组，对象                                | 获取可枚举的实例和原型属性名                                   |
| Object.keys()             | 数组，对象                                | 返回可枚举的实例属性名组成的数组                               |
| Object.getPropertyNames() | 数组，对象                                | 返回除原型属性以外的所有属性（包括不可枚举的属性）名组成的数组 |
| for..of                   | 可迭代对象(Array, Map, Set, arguments 等) | 返回属性值                                                     |



### Reference

[JavaScript 中 in 操作符(for..in)、Object.keys()和 Object.getOwnPropertyNames()的区别]<https://www.cnblogs.com/wujie520303/p/4931384.html>
