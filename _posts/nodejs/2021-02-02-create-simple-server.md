---
title: create simple node server
category: [nodejs]
---

```
var http = require('http')
http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type': 'text/plain'})
        res.end('Hello Node world')
}).listen(7789)

console.log(':tada:')

```