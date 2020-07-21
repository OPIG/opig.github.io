# HTML5自定义属性对象Dataset

```
<a href="javascript:" data-id="2312">测试</a>
```
这里的data-前缀就被称为data属性，其可以通过脚本进行定义，也可以应用CSS属性选择器进行样式设置。数量不受限制，在控制和渲染数据的时候提供了非常强大的控制。

### Dataset基础
下面是元素应用data属性的一个例子：
```
<div id="day2-meal-expense" 
  data-drink="coffee" 
  data-food="sushi" 
  data-meal="lunch">¥20.12</div>
```
要想获取某个属性的值，可以像下面这样使用dataset对象：
```
var expenseday2 = document.getElementById('day2-meal-expense');  
var typeOfDrink = expenseday2.dataset.drink;
```
需要注意的是带连字符连接的名称在使用的时候需要命名驼峰化，即大小写组合书写，这与应用元素的style对象类似，dom.style.borderColor。例如，假设上面的例子中现在有如下data属性，data-meal-time，则我们要获取相应的值可以使用：
```
expenseday2.dataset.mealTime
```


### 我们为何需要dataset

如果使用传统的方法获取属性值应该会类似下面：
```
var typeOfDrink = document.getElementById('day2-meal-expense').getAttribute('data-drink');
```
现在，假设我们要获得多个自定义的属性值，得，折腾的事情就来了，我们可能要采用类似下面的N行代码实现了：
```
var attrs = expenseday2.attributes,
expense = {}, i, j;  
for (i = 0, j = attrs.length; i < j; i++) {
  if(attrs[i].name.substring(0, 5) == 'data-') {
    expense[attrs[i].name.substring(5)] = attrs[i].value;
  }
}
```
而使用dataset属性，我们根本不需要任何循环去获取你想要的那个值，直接秒杀：
```
expense = document.getElementById('day2-meal-expense').dataset;
```
dataset并不是典型意义上的JavaScript对象，而是个DOMStringMap对象，DOMStringMap是HTML5一种新的含有多个名-值对的交互变量。


### dataset的操作

您可以像下面这样操作名-值对：
```
chartInput = [];
for (var item in expense) {
  chartInput.push(expense[item]);
}
```
上面这几行代码作用是让所有的自定义的属性值塞到一个数组中。

如果你想删掉一个data属性，可以这么做：
```
delete expenseday2.dataset.meal;
```
如果你想给元素添加一个属性，可以这么做：
```
expenseday2.dataset.dessert = 'icecream';
```
### 什么地方使用dataset

每次你使用自定义data属性的时候，使用dataset去获取名-值对就是个不错的选择。考虑到现在很多浏览器还是把dataset当作不认识的外星生物看待，所以，在实际使用的时候，有必要进行下特征检测，看看是否支持dataset，类似下面的使用：
```
if(expenseday2.dataset) {
  expenseday2.dataset.dessert = 'icecream';
} else {
  expenseday2.setAttribute('data-dessert', 'icecream');
}
```
注意：如果你的应用程序会频繁更新data属性值的话，建议使用JavaScript对象进行数据管理，而不是每次都经由data属性进行更新。

### CSS中的data属性
我们可以基于data属性值对相应的元素设置CSS样式，例如下面这个例子：

HTML代码如下：
```
<div class="mm" data-name="无版权"></div>
<div class="mm" data-name="undefined"></div>
```
CSS代码如下：
```
.mm{width:256px; height:200px;}
.mm[data-name='无版权']{background:url(mm1.jpg) no-repeat;}
.mm[data-name='undefined']{background:url(mm3.jpg) no-repeat;}
```



reference
[HTML5自定义属性对象Dataset简介](https://www.zhangxinxu.com/wordpress/2011/06/html5%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7%E5%AF%B9%E8%B1%A1dataset%E7%AE%80%E4%BB%8B/)
