---
tags: ['前端遇到的问题']
---

1. 在移动端a、input、label等标签点击后会出现背景阴影问题   

将`a,input,label{-webkit-tap-highlight-color:rgba(255,0,0,0);} `背景设置成透明的就解决了。

2. 移动端页面 手机号码显示蓝色（iphone苹果手机）   
 在head里面，“禁用电话号码识别”：`<meta name="format-detection" content="telephone=no" />`，效果正常了

3. 手机端页面，点击手机号拨打电话 
`<a href="tel:13838383838" class="call">13512341234</a>`一般情况下，这样就可以解决问题了，如果这样写不生效的话，在页面里在加上下面的mate标签即可`<meta name="format-detection" content="telephone=yes">`

4. css时间线实现
通过linear-gradient来画线或者用定位来实现， 点击效果可以通过引入input,label.
`<input class='radio' id='item' name='item' type='radio'>`
`<label class='circle' for='item'></label>`
配合` .radio:checked + label.circle{}`添加点击样式取代js.  

```css 

  background: linear-gradient(
    to right,
    transparent 374px,
    #dadada 374px,
    #dadada 377px,
    transparent 377px
  );
```

demo: <http://www.webkaka.com/tutorial/html/2020/071286/>

