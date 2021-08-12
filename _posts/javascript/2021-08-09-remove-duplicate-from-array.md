---
category: [javascript]
tags:
  - js
  - array
---

# 数组去重

## 1. 利用 ES6 Set 去重（ES6 中最常用）

不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法

```js

  var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}, ,];

  function removeDup(arr) {
    return Array.from(new Set(arr));
  }

  removeDup(arr);
  //  [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
  // {}没有去重

```

## 2. [...new Set(arr)]

根据 Set 的不能包含相同键名的特性，结合扩展运算符将类数组接口转换为纯数组

```js

  var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}, ,];

  function removeDup(arr) {
    return [...new Set(arr)];
  }

  removeDup(arr);
  //  [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
   // {}没有去重

```

## 3. 利用 for 嵌套 for，然后 splice 去重

双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。为了防止数组塌陷，删掉元素之后需要修改当前下标索引(j--)

```js

  function removeDup(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr;
  }

  var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}, ,];
  removeDup(arr);
  // [1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {}, {}]
  //NaN、{}没有去重

```

## 4. 利用 reduce+includes

```js

  function removeDup(arr) {
    return arr.reduce((pre, cur) => {
      return pre.includes(cur) ? pre : [...pre, cur];
    }, []);
  }
  var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}, ,]
  removeDup(arr)
  // [(1, 'true', true, 15, false, undefined, null, NaN, 'NaN', 0, 'a', {}, {})];

  // {}没有去重

```

## 5. 利用Map数据结构去重

```js

  function removeDup(arr) {
    let map = new Map()
    let array = new Array()
    for(let i = 0; i<arr.length;i++){
      if(map.has(arr[i])){
        map.set(arr[i], true)
      } else {
        map.set(arr[i], false)
        array.push(arr[i])
      }
    }
    return array
  }

  var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}, ,]
  removeDup(arr)
  // [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}];
  // {}没有去重

```

## 6. 利用递归去重

```js

  function removeDup(arr) {
    var array = arr
    var len = array.length

    arr.sort((a,b)=> a-b)
    function loop (index) {
      if(index >= 1) {
        if(array[index] === array[index - 1]) {
          array.splice(index, 1)
        }
        loop(index - 1)
      }
    }

    loop(len - 1)
    return array
  }

  var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}, ,]

  removeDup(arr)

  // [1, "true", false, null, 0, true, 15, NaN, NaN, "NaN", "a", {}, {}, undefined]
  // NaN、{}没有去重

```

## 7. 利用filter

```js

  function removeDup(arr) {
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item, 0) == index
    })
  }

  var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}, ,]

  removeDup(arr)
  // [1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {}, {}]
  // {}没有去重

```

## 8. 利用hasOwnProperty

```js

  function removeDup(arr){
    var obj = {}
    return arr.filter((item, index, arr) => {
        return obj.hasOwnProperty(typeof item + item) ? false: (obj[typeof item + item] = true)
    })
  }

  var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];

  removeDup(arr)

  // [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}]

```

## 9. 利用includes

```js

  function removeDup(arr) {
    if(!Array.isArray(arr)){
      return
    }
    var array = []
    for(var i = 0 ; i<arr.length; i++) {
      if(!array.includes(arr[i])) {
        array.push(arr[i])
      }
    }

    return array
  }

  var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
  removeDup(arr)

  //  [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
  // {}没有去重

```

## 10. 利用对象的属性不能相同的特点进行去重

` if (!obj[typeof arr[i] +arr[i]])`不能写成` if (!obj[arr[i]])`, 因为`true`, `'true'`都会转换成字符串存储在obj中

```js

  function removeDup(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var arrry= [];
     var  obj = {};

    for (var i = 0; i < arr.length; i++) {
        if (!obj[typeof arr[i] +arr[i]]) {
            arrry.push(arr[i])
            obj[typeof arr[i] +arr[i]] = 1
        } else {
            obj[typeof arr[i] +arr[i]] = Number(obj[arr[i]]) +1
        }
    }
    return arrry;
  }
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{},,];

    removeDup(arr)
    // [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, undefined]

```

## 11. 利用sort和for循环

```js

  function removeDup(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var arrry= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
  }
  var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{},,];
  removeDup(arr)

  // [0, 1, 15, NaN, NaN, "NaN", {}, {}, "a", false, null, "true", true, undefined]
 // NaN、{}没有去重

```

## 12. 利用indexOf去重

```js

  function removeDup(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
  }

  var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{},,];

  removeDup(arr)
  //  [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {}, {}]
  // NaN、{}没有去重

```

## 13. 利用正则reg和sort配合

以下案例适合纯数字的数组去重, 可以按这个思路根据具体情况来使用

```js 

   function removeDup(arr) {
     arr.sort((a,b)=>a-b)
      arr = arr.join('@') + '@'
      var reg = /(\d+@?)\1*/g
      var newArr = []
          arr.replace(reg, (val, group) => {
          newArr.push(Number(group.slice(0, group.length - 1)))
      })
      return newArr
   }

```

## 14. 利用新对象存储

拿数组中的每项向新容器中存储，如果已经存储过，就把当前项干掉

```js

  function removeDup(arr) {
    let obj ={}
    for(let i = 0; i< arr.length; i++) {
      let item = arr[i]
      if(typeof obj[item] !== 'undefined') {
        arr[i] = arr[arr.length - 1]
        arr.length--
        i--
        continue
      }
      obj[item] = item
    }
  }

```

## reference

[JavaScript数组去重](https://segmentfault.com/a/1190000016418021)