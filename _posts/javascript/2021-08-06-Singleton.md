---
category: [javascript]
tags:
  - js
---

# JavaScript 实现单例模式

demo1:
{%raw%}

  <div id="new-div-container">
    <button id="createDivBtn">click to create a new div</button>
  </div>
  <script type="text/javascript">
    function createDiv(){
      var div = document.createElement('div');
      div.innerHTML = 'created a new div successfully';
      div.id="new-div";
      div.style.cssText = "margin: 10px auto; width: 100px; height:100px; border: 1px solid red;";
      document.getElementById('new-div-container').appendChild(div);
      return div;
    }
    var getSingle = function(fn) {
      var result;
      return function(){
        // 核心
        return result || (result = fn.apply(this, arguments));
      }
    }
    var create = getSingle(createDiv);
    document.getElementById('createDivBtn').addEventListener("click", function(){
      var newDiv = create();
      newDiv.style.display="block";
    })
  </script>

{%endraw%}

demo1 source code:

```js
 
  <div id="new-div-container">
    <button id="createDivBtn">click to create a new div</button>
  </div>

  <script type="text/javascript">
    function createDiv(){
      var div = document.createElement('div');
      div.innerHTML = 'created a new div successfully';
      div.id="new-div";
      div.style.cssText = "margin: 10px auto; width: 100px; height:100px; border: 1px solid red;";
      document.getElementById('new-div-container').appendChild(div);
      return div;
    }
    var getSingle = function(fn) {
      var result;
      return function(){
        // 核心
        return result || (result = fn.apply(this, arguments));
      }
    }
    var create = getSingle(createDiv);
    document.getElementById('createDivBtn').addEventListener("click", function(){
      var newDiv = create();
      newDiv.style.display="block";
    })
  </script>

```

### reference

[JavaScript实现单例模式](https://www.cnblogs.com/yonglin/p/8080836.html)
