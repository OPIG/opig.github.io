---

---

# 修改 AirDrop 文件存放位置[https://sspai.com/post/59682](https://sspai.com/post/59682) #


Folder Actions 是 macOS 的一项功能，可让你将 AppleScript 脚本与文件夹进行关联。当关联的文件夹有添加或删除的项目，或者其窗口打开，关闭，移动或调整大小时，将执行“文件夹操作”脚本。详情可以点击这里查看官方文档。

思路

按照文档的说法，只要我写好一个 AppleScript 脚本并与下载文件夹关联，那么当 Mac 接收到 AirDrop 来的文件时，就自动移动该文件到我期望的文件夹下。看起来似乎可行。


不过，要想移动 AirDrop 来的文件，就必须知道该文件是通过 AirDrop 方式来的，那么如何识别出下载文件夹下新增的文件是 AirDrop 来的呢？

## 👉文件属性 ##


macOS 下有「文件属性」这一概念，如果你经常使用命令行，那么你对 ls 指令一定不陌生。在日常 ls -la 时，可能会遇到某些文件的权限列表后面还会有 @ 符号，它就代表该文件有扩展属性。


ls -la
抑或是你从互联网上下载了某一应用，当你第一次打开该应用时系统会提示「您确定要打开它吗？”如果您对文件的安全性有疑问，应点按“取消”」。这也是利用「文件属性」这一特性来实现的。


那么我只要利用这一特性，来判断文件是否来源于 AirDrop 即可筛选出所需移动的文件。


经查 AirDrop 对应 com.apple.quarantine 属性的值为 59 。


## 实现 ##
### 创建 AppleScript 脚本 ###


首先，确保 /Users/username/Library/Scripts/ 路径下是否有 Folder Action Scripts 文件夹 —— 用来存放所需的脚本。没有则创建。


然后在该目录下（/Users/username/Library/Scripts/Folder Action Scripts）创建 AppleScript 脚本，形如：AirDrop.scpt ，文件名取一个你喜欢的即可。脚本内容为：
```

property AIRDROP_FOLDER : "Macintosh HD:Users:username:Downloads:AirDrop" # 期望的路径，用 : 分割
property QUARANTINE_KEY : "59"

property GET_QUARANTINE_COMMAND_START : "ls -l -@ '"
property GET_QUARANTINE_COMMAND_END : "' | tr '\\n' ' ' | sed 's/.*com\\.apple\\.quarantine\\s*\\(\\d*\\)/ \\1/' | awk '{$1=$1};1'"

on adding folder items to this_folder after receiving added_items
    repeat with i from 1 to length of added_items
        set current_item to item i of added_items
        set quarantine_type to getQuarantineType(POSIX path of current_item)
        if quarantine_type is equal to QUARANTINE_KEY then
            moveFile(current_item, alias AIRDROP_FOLDER)
        end if
    end repeat
end adding folder items to

on moveFile(move_file, destination_dir)
    tell application "Finder"
        move move_file to destination_dir with replacing
    end tell
end moveFile

on getQuarantineType(file_path)
    return do shell script GET_QUARANTINE_COMMAND_START & file_path & GET_QUARANTINE_COMMAND_END
end getQuarantineType
```

脚本内 AIRDROP_FOLDER 需要修改为自己期望的路径，注意路径分割符需用 : 而不是常见的 /。


脚本逻辑为：当新增文件的文件属性 com.apple.quarantine 值为 59 时，就将该文件移动到 AIRDROP_FOLDER 设置的路径内。

### 配置 ###


右键下载文件夹，服务，打开 Folder Actions 设置(或者通过terminal搜索Folder Actions Setup)。


点击「运行服务」


在左边的配置窗口里添加下载文件夹，在右边的配置窗口里添加我们刚刚编写的 AirDrop.scpt 脚本。


自此，大功告成。当你再 AirDrop 到电脑上文件时，一旦文件接收完毕，系统就会自动将该文件移动到你设置的目录里啦。