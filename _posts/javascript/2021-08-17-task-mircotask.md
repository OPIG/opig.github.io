---
category: [javascript]
tags:
  - js
  - task
  - micro-task
  - event loop
---

# JavaScript 事件循环(Event Loop) 微任务 宏任务

js 是单线程的，事件循环是 js 的执行机制，也是 js 实现异步的一种方法。

同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。

当指定的事情完成时，Event Table会将这个函数移入Event Queue。

主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。

上述过程会不断重复，也就是常说的Event Loop(事件循环)。


JavaScript 中除了广泛的同步任务和异步任务，我们对任务有更精细的定义：

> macro-task(宏任务): 包括整体代码 setTimeout, setInterval, setImmediate, I/O, UI渲染, script标签中的整体代码

> micro-task(微任务): Promise, process.nextTick, Object.observe, MutationObserver

不同的类型的任务会进入不同的 Event Queue(事件队列)，比如 setTimeout、setInterval 会进入一个事件队列，而 Promise 会进入
另一个事件队列。

一次事件循环中有宏任务队列和微任务队列。事件循环的顺序，决定 js 代码执行的顺序。进入整体代码(宏任务-`<script>`标签包裹的代码可以理解为第一个宏任务)，开始第一次循环，接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列的任务执行完毕，
再执行所有的微任务。

## 简单示例

```js

  <script>
    setTimeout(function() {
        console.log('setTimeout');
    })

    new Promise(function(resolve) {
        console.log('promise');
    }).then(function() {
        console.log('then');
    })

    console.log('console');

    /* ----------------------------分析 start--------------------------------- */

    1、`<script>`中的整段代码作为第一个宏任务，进入主线程。即开启第一次事件循环
    2、遇到setTimeout，将其回调函数放入Event table中注册，然后分发到宏任务Event Queue中
    3、接下来遇到new Promise、Promise，立即执行；将then函数分发到微任务Event Queue中。输出: promise
    4、遇到console.log，立即执行。输出: console
    5、整体代码作为第一个宏任务执行结束，此时去微任务队列中查看有哪些微任务，结果发现了then函数，然后将它推入主线程并执行。
  输出: then
    6、第一轮事件循环结束
    开启第二轮事件循环。先从宏任务开始，去宏任务事件队列中查看有哪些宏任务，在宏任务事件队列中找到了setTimeout对应的回调函数，
  立即执行之。此时宏任务事件队列中已经没有事件了，然后去微任务事件队列中查看是否有事件，结果没有。此时第二轮事件循环结束；
  输出：setTimeout

      /* ----------------------------分析 end--------------------------------- */
  </script>

```

## 分析更复杂的代码

```js

  <script>
    console.log('1');

    setTimeout(function() {
        console.log('2');
        process.nextTick(function() {
            console.log('3');
        })
        new Promise(function(resolve) {
            console.log('4');
            resolve();
        }).then(function() {
            console.log('5')
        })
    })
    process.nextTick(function() {
        console.log('6');
    })
    new Promise(function(resolve) {
        console.log('7');
        resolve();
    }).then(function() {
        console.log('8')
    })

    setTimeout(function() {
        console.log('9');
        process.nextTick(function() {
            console.log('10');
        })
        new Promise(function(resolve) {
            console.log('11');
            resolve();
        }).then(function() {
            console.log('12')
        })
    })
  </script>

```

### 解析：

### 一、 第一轮事件循环

a)、整段`<script>`代码作为第一个宏任务进入主线程，即开启第一轮事件循环

b)、遇到 console.log，立即执行。输出：1

c)、遇到 setTimeout，将其回调函数放入 Event table 中注册，然后分发到宏任务事件队列中。我们将其标记为 setTimeout1

d)、遇到 process.nextTick，其回调函数放入 Event table 中注册，然后被分发到微任务事件队列中。记为 process1

e)、遇到 new Promise、Promise，立即执行；then 回调函数放入 Event table 中注册，然后被分发到微任务事件队列中。记为 then1。
输出: 7

f)、遇到 setTimeout，将其回调函数放入 Event table 中注册，然后分发到宏任务事件队列中。我们将其标记为 setTimeout2

此时第一轮事件循环宏任务结束，下表是第一轮事件循环宏任务结束时各 Event Queue 的情况

{: .table .table1}
| -                      | 宏任务事件队列 | 微任务事件队列  |
| ---------------------- | -------------- | --------------- |
| 第一轮事件循环         | (宏任务已结束) | process1、then1 |
| 第二轮事件循环(未开始) | setTimeout1    |                 |
| 第三轮事件循环(未开始) | setTimeout2    |                 |

可以看到第一轮事件循环宏任务结束后微任务事件队列中还有两个事件待执行，因此这两个事件会被推入主线程，然后执行

g)、执行 process1。输出：6

h)、执行 then1。输出：8

第一轮事件循环正式结束！


### 二、 第二轮事件循环

a）、第二轮事件循环从宏任务setTimeout1开始。遇到console.log，立即执行。输出: 2

b）、遇到process.nextTick，其回调函数放入Event table中注册，然后被分发到微任务事件队列中。记为process2

c）、遇到new Promise，立即执行；then回调函数放入Event table中注册，然后被分发到微任务事件队列中。记为then2。输出: 4

此时第二轮事件循环宏任务结束，下表是第二轮事件循环宏任务结束时各Event Queue的情况

{: .table .table2}
|-	|宏任务事件队列	|微任务事件队列|
|---|---|---|
|第一轮事件循环(已结束)	|||	
|第二轮事件循环|	(宏任务已结束)|	process2、then2|
|第三轮事件循环(未开始)|	setTimeout2	||

可以看到第二轮事件循环宏任务结束后微任务事件队列中还有两个事件待执行，因此这两个事件会被推入主线程，然后执行

d)、执行process2。输出：3

e)、执行then2。输出：5

第二轮事件循环正式结束！


### 三、第三轮事件循环

a)、第三轮事件循环从宏任务setTimeout2开始。遇到console.log，立即执行。输出: 9

d)、遇到process.nextTick，其回调函数放入Event table中注册，然后被分发到微任务事件队列中。记为process3

c)、遇到new Promise，立即执行；then回调函数放入Event table中注册，然后被分发到微任务事件队列中。记为then3。输出: 11

此时第三轮事件循环宏任务结束，下表是第三轮事件循环宏任务结束时各Event Queue的情况

{: .table .table3}
|-	|宏任务事件队列	|微任务事件队列|
|---|---|---|
|第一轮事件循环(已结束)		|||
|第二轮事件循环(已结束)		|||
|第三轮事件循环(未开始)	|(宏任务已结束)	|process3、then3|

可以看到第二轮事件循环宏任务结束后微任务事件队列中还有两个事件待执行，因此这两个事件会被推入主线程，然后执行

d)、执行process3。输出：10

e)、执行then3。输出：12



## Reference

[译文：JS 事件循环机制（event loop）之宏任务、微任务](https://segmentfault.com/a/1190000014940904)
[原文：JS 事件循环机制（event loop）之宏任务、微任务](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly)

[JavaScript 事件循环(Event Loop)](https://segmentfault.com/a/1190000017970432?utm_source=sf-similar-article)

[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)
