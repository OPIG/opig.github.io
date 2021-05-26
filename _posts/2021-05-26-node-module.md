---
tags: [node]
---

## 1. cheerio <https://cheerio.js.org/>
cheerio是jquery核心功能的一个快速灵活而又简洁的实现，主要是为了用在服务器端需要对DOM进行操作的地方,让你在服务器端和html愉快的玩耍
```
var cheerio = require('cheerio'),
    $ = cheerio.load('<h2 class = "title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
//=> <h2 class = "title welcome">Hello there!</h2>

```

## 2. JSDom <https://github.com/jsdom/jsdom> <https://enzymejs.github.io/enzyme/docs/guides/jsdom.html>

## 3. htmlparser2 <https://github.com/fb55/htmlparser2>

## 4. fs

## 5. glob

## 6. path

## 7. form-data
`const FormData = require('form-data');const data = new FormData();` 
使用时需要设置`header:{...data.getHeaders()}`

## 8. plugins
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
```