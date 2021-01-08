
## Cannot redeclare block-scoped variable 'name'

### 原因
在默认状态下，`typescript` 将 `DOM typings` 作为全局的运行环境，所以当我们声明 `name`时， 与 `DOM` 中的全局 `window` 对象下的 `name` 属性出现了重名。因此，报了 `error TS2451: Cannot redeclare block-scoped variable 'name'`. 错误。

### 解决方法
解决这个问题，思路有两个：

#### 方法一
将运行环境由 DOM typings 更改成其他运行环境。
我们可以在 tsconfig.json 中做一下声明：
```
  {
      "compilerOptions": {
          "lib": [
              "es2015"
          ]
      }
  }

```

#### 方法二
既然与全局的变量出现重名，那我们将脚本封装到模块（`module`）内。`module` 有自己的作用域，自然不会与全局作用域的变量产生冲突。

在 `Typescript` 中，只要文件存在 `import` 或 `export` 关键字，都被视为 `module`

我们在脚本的最后一行，添加了 `export {};`。将文件声明为`module`， 变量 `name` 被限制在了 `module` 的作用域下，因此不会与全局的`name`产生冲突。

