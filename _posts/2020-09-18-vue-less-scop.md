vue组件编译后，会将 template 中的每个元素加入 [data-v-xxxx] 属性来确保 `style scoped` 仅本组件的元素而不会污染全局，但如果你引用了第三方组件：

```
<div class="box">
  <child></child>
</div>
```

假设 child中的内容为
```
<div class="item">...</div>
```
默认只会对组件的最外层（div）加入这个 [data-v-xxxx] 属性，但第二层开始就没有效果了。 第一层还有 data-v-17bb9a05, 但第二层的 .item 就没有了。
```
<div data-v-17bb9a05 class="box">
  <div class="item">....</div>
</div>

```

所以，如果你期待通过如下方式修改 .item 的样式。是没有任何效果的：

```
<style scoped>
    .box .item {
        // ...
    }
</style>
``` 

这是因为，所有的scoped中的css最终编译出来都会变成这样：

.box[data-v-17bb9a05] .item[data-v-17bb9a05]
 

解决方法一：除非你将 scoped 移除，或者新建一个没有 scoped 的 style（一个.vue文件允许多个style）

```
<style scoped>
    .box {
        // ...
    }
</style>

<style>
    .box .item {
        // ...
    }
</style>
```
 

解决方法二：深度作用选择器 `>>>`

#### （注意，只作用于css）

.box >>> .item {
    // ...
}
但如果是sass/less的话可能无法识别，这时候需要使用 `/deep/` 选择器。

```
<style lang="scss" scoped>
.box {
  width: 100px;

  /deep/ .item {
    border: 0;
    color: #000;
  }
}
</style>
```
 

