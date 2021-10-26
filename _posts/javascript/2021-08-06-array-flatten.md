---
category: [javascript]
tags:
  - js
  - array
---


# 数组扁平化

数组扁平化是指将一个多维数组变为一维数组

`[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]`


### 实现

#### 1. reduce

遍历数组每一项，若值为数组则递归遍历，否则concat。

```js

  function flatten(arr) {  
      return arr.reduce((result, item)=> {
          return result.concat(Array.isArray(item) ? flatten(item) : item);
      }, []);
  }

```

reduce是数组的一种方法，它接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

reduce包含两个参数：回调函数，传给total的初始值

```js

  // 求数组的各项值相加的和： 
  arr.reduce((total, item)=> {  // total为之前的计算结果，item为数组的各项值
      return total + item;
  }, 0);

```

#### 2. toString & split

调用数组的toString方法，将数组变为字符串然后再用split分割还原为数组

```js

  function flatten (arr) {
    return arr.toString().split(',').map(item => {
      return parseFloat(item)
    // return Number(item)
    })
  }

```

因为split分割后形成的数组的每一项值为字符串，所以需要用一个map方法遍历数组将其每一项转换为数值型

#### 3. join & split

和上面的toString一样，join也可以将数组转换为字符串

```js

  function flatten(arr) {
    return arr.join(',').split(',').map(item => {
      return parseFloat(item)
      // return Number(item)
    })
  }

```

#### 4. 正则

```js

  function flatten(arr) {
    return JSON.stringify(t).replace(/(\[|\])/g, '').split(',').map(item =>{
        return Number(item)
    })
  }

```

#### 5. 递归

递归的遍历每一项，若为数组则继续遍历，否则concat

``` js

  function flatten(arr) {
    var res = []
    arr.map(item => {
      if(Array.isArray(item)) {
        res = res.concat(flatten(item))
      } else {
        res.push(item)
      }
    })
    return res
  }

```

递归+闭包

```js

!(function(){
  function flatten() {
    let result = []
    let self = this
    let fn = (arr) => {
      for(let i = 0; i< arr.length; i++) {
        let item = arr[i]
        if(Array.isArray(item)) {
          fn(item)
          continue
        }
        result.push(item)
      }
    }
    fn(self)
    return result
  }

Array.prototype.myFlatten = flatten
})()

arr = arr.myFlatten()


```

#### 6. 扩展运算符

es6的扩展运算符能将二维数组变为一维

`[].concat(...[1, 2, 3, [4, 5]]);  // [1, 2, 3, 4, 5]`

根据这个结果我们可以做一个遍历，若arr中含有数组则使用一次扩展运算符，直至没有为止。

```js

  function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr)
    }
    return arr
  }

```

#### 7. 原有数组的基础上面改

实现数组拍平的方法；进阶：能不能不用返回一个新数组，就在原有数组的基础上面改？

```js
function flatArr(arr) {
    for (let i = 0;;) {
        if (arr[i] == null) break;
        if (Array.isArray(arr[i])) {
            const subArr = flatArr(arr[i])
            arr.splice(i, 1, ...subArr)
            i = i + subArr.length
        } else {
            i++
        }
    }
    return arr
}

```


### reference
[数组扁平化概念](https://www.cnblogs.com/wind-lanyan/p/9044130.html)