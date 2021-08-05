---
category: [javascript]
tags:
  - js
---

# 防抖和节流

如果窗口的 resize、scroll、输入框内容校验、表单提交等事件触发的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕。此时我们可以采用 debounce（防抖）和 throttle（节流）的方式来减少触发的频率，同时又不影响实际效果。

## 防抖

debounce（防抖），简单来说就是防止抖动。

当持续触发事件时，debounce 会合并事件且不会去触发事件，当一定时间内没有触发再这个事件时，才真正去触发事件。

### 非立即执行版

非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

```js
const debounce = (func, wait, ...args) => {
  let timeout;
  return function () {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
};
```

### 立即执行版

立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。

```js
const debounce = (func, wait, ...args) => {
  let timeout;
  return function () {
    const context = this;
    if (timeout) clearTimeout(timeout);
    let callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
    if (callNow) {
      func.apply(contenxt, args);
    }
  };
};
```

### 结合版

```js
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}
```

### debounce demo

{%raw%}
After debounce: <input type="text" id="input" />
output: <span id="inputSpan"></span>
 
 <script>
    // After exec debounce
    var input = document.getElementById('input')
    var debounceFn = debounce(2000, test)
    input.addEventListener('keyup', function(e) {
      debounceFn(e.target.value)
    })
    function test(value) {
      document.getElementById('inputSpan').innerHTML = value
      console.log(value)
    }
    function debounce(delay, callback) {
      var time
      return function (value) {
        clearTimeout(time)
        time = setTimeout(function () {
         callback(value)
        }, delay)
      }
    }
  </script>

{%endraw%}

demo source code:

```html

After debounce: <input type="text" id="input" />
output: <span id="inputSpan"></span>

```

```js
 
 <script>
    // After exec debounce
    var input = document.getElementById('input')
    var debounceFn = debounce(2000, test)
    input.addEventListener('keyup', function(e) {
      debounceFn(e.target.value)
    })
    function test(value) {
      document.getElementById('inputSpan').innerHTML = value
      console.log(value)
    }
    function debounce(delay, callback) {
      var time
      return function (value) {
        clearTimeout(time)
        time = setTimeout(function () {
         callback(value)
        }, delay)
      }
    }
  </script>

```

{%raw%}
 IIFE debounce: <input type="text" id="iifeInput">
 output: <span id="iifeSpan"></span>

  <script>
    // IIFE exec debounce
    function debounceIIFE(wait,cb){
      var timeout
      return function(){
        clearTimeout(timeout)
        var execNow = !timeout
        timeout = setTimeout(function(){
          timeout = null
        }, wait)

        if(execNow) {
          cb.apply(this, arguments)
        }
      }
    }

    var inputIIfe = document.getElementById('iifeInput')
    var debExe = debounceIIFE(2000,outPutIIFE)
    inputIIfe.addEventListener('keyup', (e)=>{
      debExe(e.target.value)
    })

    function outPutIIFE(value){
       document.getElementById('iifeSpan').innerHTML = value
      console.log(value, 'iife debounce====>');
    }
  </script>
{%endraw%}

demo source code:

```html

 IIFE debounce: <input type="text" id="iifeInput">
 output: <span id="iifeSpan"></span>

```

```js

  <script>
    // IIFE exec debounce
    function debounceIIFE(wait,cb){
      var timeout
      return function(){
        clearTimeout(timeout)
        var execNow = !timeout
        timeout = setTimeout(function(){
          timeout = null
        }, wait)

        if(execNow) {
          cb.apply(this, arguments)
        }
      }
    }

    var inputIIfe = document.getElementById('iifeInput')
    var debExe = debounceIIFE(2000,outPutIIFE)
    inputIIfe.addEventListener('keyup', (e)=>{
      debExe(e.target.value)
    })

    function outPutIIFE(value){
       document.getElementById('iifeSpan').innerHTML = value
      console.log(value, 'iife debounce====>');
    }
  </script>

```

## 节流

throttle（节流），当持续触发事件时，保证隔间时间触发一次事件。

持续触发事件时，throttle 会合并一定时间内的事件，并在该时间结束时真正去触发一次事件。

### 时间戳版

```js
const throttle = (func, wait, ...args) => {
  let pre = 0;
  return function () {
    const context = this;
    let now = Date.now();
    if (now - pre >= wait) {
      func.apply(context, args);
      pre = Date.now();
    }
  };
};
```

### 定时器版

```js
const throttle = (func, wait, ...args) => {
  let timeout;
  return function () {
    const context = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
};
```

### 结合版

其实时间戳版和定时器版的节流函数的区别就是，时间戳版的函数触发是在时间段内开始的时候，而定时器版的函数触发是在时间段内结束的时候。

```js
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */

function throttle(func, wait, type) {
  if (type === 1) {
    var previous = 0;
  } else if (type === 2) {
    var timeout;
  }

  return function () {
    var context = this;
    var args = arguments;
    if (type === 1) {
      var now = Date.now();
      if (now - previous > wait) {
        func.apply(context, args);
        previous = Date.now();
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout ==
          setTimout(function () {
            timeout = null;
            func.apply(context, args);
          }, wait);
      }
    }
  };
}
```

### throttle demo
{%raw%}
定时器 throttle: <button id="btn">定时器 click me</button>
定时器 output: <span id="output"></span>

<script>
// timeout exec throttle
  var btn = document.getElementById('btn')
  var throFn = throttle(2000, outputFn)
  btn.addEventListener('click', function(){
    throFn('-定时器')
  })
  var output = document.getElementById('output')
  var num = 0
  function outputFn(value){
    output.innerHTML =  (num++) + value
    console.log(num,'定时器throttle=======>')
  }
  function throttle(delay, cb) {
    var timer
    return function(value) {
      if(!timer) {
        timer = setTimeout(function(){
          timer = null
          cb(value)
        }, delay)
      }
    }
  }
</script>

{%endraw%}

demo source code:

```html

定时器 throttle: <button id="btn">定时器 click me</button>
定时器 output: <span id="output"></span>

```

```js

<script>
// timeout exec throttle
  var btn = document.getElementById('btn')
  var throFn = throttle(2000, outputFn)
  btn.addEventListener('click', function(){
    throFn('-定时器')
  })
  var output = document.getElementById('output')
  var num = 0
  function outputFn(value){
    output.innerHTML =  (num++) + value
    console.log(num,'定时器throttle=======>')
  }
  function throttle(delay, cb) {
    var timer
    return function(value) {
      if(!timer) {
        timer = setTimeout(function(){
          timer = null
          cb(value)
        }, delay)
      }
    }
  }
</script>

```

{%raw%}

时间戳throttle: <button id="time-btn">时间戳click me</button>
时间戳output: <span id="time-output"></span>

<script>
 // time zone exec throttle
 var timeBtn = document.getElementById('time-btn')
  var timeThroFn = timeThrottle(2000, timeOutputFn)
  timeBtn.addEventListener('click', function(){
    timeThroFn('-时间戳')
  })
  var timeOutput = document.getElementById('time-output')
  var timeNum = 0
  function timeOutputFn (value){
    timeOutput.innerHTML =  (timeNum++) + value
    console.log(timeNum,'时间戳throttle=======>')
  }
  function timeThrottle(wait, cb) {
     var pre=0
    return function(value){
      var nowTime = Date.now()
      if(nowTime - pre >= wait) {
        cb(value)
        pre = Date.now()
      }
    }
  }
</script>

{%endraw%}

demo source code:

```html

时间戳throttle:
<button id="time-btn">时间戳click me</button>
时间戳output:
<span id="time-output"></span>
```

```js

<script>
 // time zone exec throttle
 var timeBtn = document.getElementById('time-btn')
  var timeThroFn = timeThrottle(2000, timeOutputFn)
  timeBtn.addEventListener('click', function(){
    timeThroFn('-时间戳')
  })
  var timeOutput = document.getElementById('time-output')
  var timeNum = 0
  function timeOutputFn (value){
    timeOutput.innerHTML =  (timeNum++) + value
    console.log(timeNum,'时间戳throttle=======>')
  }
  function timeThrottle(wait, cb) {
     var pre=0
    return function(value){
      var nowTime = Date.now()
      if(nowTime - pre >= wait) {
        cb(value)
        pre = Date.now()
      }
    }
  }
</script>

```


### reference

[防抖 debounce](https://davidwalsh.name/function-debounce) 
[防抖和节流原理分析](https://blog.csdn.net/weixin_39939012/article/details/101211869)
