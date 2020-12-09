!function(){
  var gitalk = new Gitalk({
    clientID: '', // GitHub Application Client ID
    clientSecret: '', // GitHub Application Client Secret
    repo: '',      // 存放评论的仓库
    owner: '',          // 仓库的创建者，
    admin: [],        // 如果仓库有多个人可以操作，那么在这里以数组形式写出
    id: decodeURI(location.pathname),      // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
    title: document.title,
    body:  '文章链接：'+ decodeURIComponent(location.origin+location.pathname),
  })
  gitalk.render('gitalk-container');    // 渲染Gitalk评论组件
}()


// JS 代码混淆 防止信息泄露
// https://www.sojson.com/jscodeconfusion.html