## CSS3属性


### CSS3过渡属性transition

 | 属性                       | 描述                    |
 | --------                   | -----                   |
 | transition-property        | 指定要过渡的css属性     | 
 | transition-duration        | 指定完成过渡要花费的时间    | 
 | transition-timing-function        | 指定要过渡函数    | 
 | transition-delay       | 指定过渡开始出现的延迟时间    | 
 
 属性可以分开写，也可以放在一起写

常用写法：transition：transform（名称） 1.2s（过渡时间） linear（过渡方式） 2s（过渡开始时间）
 
 属性详解
transition-property
不是所有属性都能过渡，只有属性具有一个中间点值才具备过渡效果。见http://leaverou.github.io/animatable/

 

transition-duration
指定从一个属性到另一个属性过渡所要花费的时间。默认值为0，为0时，表示变化是瞬时的，看不到过渡效果。

 

transiton-timing-function
过渡函数，有如下几种：

     Ease：首尾变缓。

     Linear：线性变化。

     Ease-in：开始慢，后面快。

     Ease-out：开始块，后面慢。

     Ease-in-out：首尾慢，中间快。

     cubic-bezier：三次贝塞尔曲线，自定义（不太懂）

 

触发过渡（重要）
单纯的代码不会触发任何过渡操作，需要通过用户的行为（如点击，悬浮等）触发，可触发的方式有： 
:hover :focus :checked 媒体查询触发 JavaScript触发

 

局限性
transition的优点在于简单易用，但是它有几个很大的局限。 

（1）transition需要事件触发，所以没法在网页加载时自动发生。 

（2）transition是一次性的，不能重复发生，除非一再触发。 

（3）transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。 

（4）一条transition规则，只能定义一个属性的变化，不能涉及多个属性。 

CSS Animation就是为了解决这些问题而提出的。


### Animation

animation-name：声明要操纵的@keyframes规则的名称。

animation-duration：动画完成一个周期所需的时间。[Xs or Xms]

animation-timing-function：建立预设的加速曲线，例如缓动或线性。[ease, ease-out, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) (e.g. cubic-bezier(0.5, 0.2, 0.3, 1.0))]

animation-delay：加载元素到动画序列开始之间的时间。[Xs or Xms]

animation-direction：设置循环后动画的方向, 其默认值在每个周期重置。换句话说该属性定义是否应该轮流反向播放动画。[normal, alternate], alternate反向播放动画

animation-iteration-count：应该执行动画的次数。[X]

animation-fill-mode：设置在动画之前/之后应用的值。 [forwards, backwards, both, none]

animation-play-state：暂停/播放动画。您可以将动画的最后状态设置为保留在屏幕上，或者可以将其设置为切换回动画开始之前的状态。[paused, running, running]



### linear-gradient用法
linear-gradient() 函数用于创建一个线性渐变的 "图像"。

为了创建一个线性渐变，你需要设置一个起始点和一个方向（指定为一个角度）的渐变效果。你还要定义终止色。终止色就是你想让Gecko去平滑的过渡，并且你必须指定至少两种，当然也会可以指定更多的颜色去创建更复杂的渐变效果。



### CSS3自定义滚动条样式 -webkit-scrollbar

滚动条组成
::-webkit-scrollbar 滚动条整体部分
::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

```

:horizontal
//horizontal伪类适用于任何水平方向上的滚动条
 
:vertical
//vertical伪类适用于任何垂直方向的滚动条
 
:decrement
//decrement伪类适用于按钮和轨道碎片。表示递减的按钮或轨道碎片，例如可以使区域向上或者向右移动的区域和按钮
 
:increment
//increment伪类适用于按钮和轨道碎片。表示递增的按钮或轨道碎片，例如可以使区域向下或者向左移动的区域和按钮
 
:start
//start伪类适用于按钮和轨道碎片。表示对象（按钮 轨道碎片）是否放在滑块的前面
 
:end
//end伪类适用于按钮和轨道碎片。表示对象（按钮 轨道碎片）是否放在滑块的后面
 
:double-button
//double-button伪类适用于按钮和轨道碎片。判断轨道结束的位置是否是一对按钮。也就是轨道碎片紧挨着一对在一起的按钮。
 
:single-button
//single-button伪类适用于按钮和轨道碎片。判断轨道结束的位置是否是一个按钮。也就是轨道碎片紧挨着一个单独的按钮。
 
:no-button
no-button伪类表示轨道结束的位置没有按钮。
 
:corner-present
//corner-present伪类表示滚动条的角落是否存在。
 
:window-inactive
//适用于所有滚动条，表示包含滚动条的区域，焦点不在该窗口的时候。
 
::-webkit-scrollbar-track-piece:start {
/*滚动条上半边或左半边*/
}
 
::-webkit-scrollbar-thumb:window-inactive {
/*当焦点不在当前区域滑块的状态*/
}
 
::-webkit-scrollbar-button:horizontal:decrement:hover {
/*当鼠标在水平滚动条下面的按钮上的状态*/
}

::-webkit-scrollbar {
    width: 14px;
    height: 14px;
}

```

```
*::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: transparent;
    -webkit-box-shadow: inset 0px 0px 0px 7px #C0C5C8;
    border: 2px solid transparent;
}
```

```
::-webkit-scrollbar-track {
    background-color: transparent;
}
```

```
::-webkit-scrollbar-track-piece {
    width: 15px;
    border-right: 1px solid #EEE;
    border-left: 1px solid #e4e4e4;
    background-color: #f0f0f0;
    background-image: -webkit-linear-gradient(left,#f0f0f0,#FFF);
}
```
#### reference
[CSS3自定义滚动条样式 -webkit-scrollbar](https://blog.csdn.net/hanshileiai/article/details/40398177)
[demo](https://www.xuanfengge.com/demo/201311/scroll/css3-scroll.html)
