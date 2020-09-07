git stash /本地修改的代码暂存

git fetch origin master:master   //拉取master代码

git rebase origin/master //合并拉取的master代码到本分支

git stash pop //将暂存的修改代码释放出来





git fetch origin master:temp
上面代码的意思是：从远程的origin仓库的master分支下载到本地master并新建一个temp分支
注意：不建议使用pull拉取最新代码，因为pull拉取下来后会自动和本地分支合并

git show

git reflog

git log --graph



### 代码回滚 [https://www.cnblogs.com/human/p/5128482.html](https://www.cnblogs.com/human/p/5128482.html)
今天遇到的情况是这样的，我有一个feature A分支，merge到了release分支，但是release分支有人（小甲）在使用，
我们的代码不冲突，但是小甲在release上做测试，马上就要merge到master分支，而我的feature A还是不成熟的，所以暂时不能一起merge到master，
我采取的操作就是把release的内容回滚到merge之前。
1.  `git log` 查看git日志获取需要回滚到的command id

2. `git checkout -b [localRelease] origin/release`(localRelease 为本地分支名，release为远程分支名)

2. `git reset --hard [command id] //将当前branch的HEAD指针指向commit hash`

3. `git push -f origin [currentBranch] ` // currentBranch 就是release
