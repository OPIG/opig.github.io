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
