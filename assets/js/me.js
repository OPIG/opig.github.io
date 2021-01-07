/*
 * @Author: your name
 * @Date: 2020-12-16 19:06:57
 * @LastEditTime: 2021-01-05 10:00:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \opig.github.io\assets\js\me.js
 */
/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 */

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
    distractionFreeMode: true // 是否启用类似FB的阴影遮罩
  })
  gitalk.render('gitalk-container');    // 渲染Gitalk评论组件
}()


// JS 代码混淆 防止信息泄露
// https://www.sojson.com/jscodeconfusion.html
// Reference
// https://blog.csdn.net/madridcrls7/article/details/80871596
// https://www.cnblogs.com/JosonLee/p/10053715.html