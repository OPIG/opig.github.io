---
tags: [linux, git]
---

### 1. Navigate to [git release](https://github.com/git/git), to find the latest release.

run `wget https://github.com/git/git/archive/v2.30.0.tar.gz`
> You can download to you local laptop first, then transfer to Liunx（ALiYun）through FTP
> or use `wget https://github.com/git/git/archive/v2.30.0.tar.gz` download to linux, here we talk about this method

we also can use `yum -y install git`, it's very simple and easy, but seems the git that installed by `yum` is not the latest(old version). Hence, we go to the git release page to download the version that we need.

### 2. Unzip the zip file

run `tar -xvzf git@v2.30.0.tar.gz`, here we get a folder named `git-2.30.0`(changeable)

### 3. compile git source code

before you start compile git source code, you may need to uninstall older version git(haven't validate this way, because it's the first time to install git on my linux, no old version)

run `yum -y remove git`

Then run `cd git-2.30.0` to enter git folder   

You maybe need to install some dependencies(I haven't try this either, seems that my linux have these dependencies early, because i install git successfully without this step)

`yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker` 

I directly run `make prefix=/usr/local/git all` to compile git source code.

### 5. install git
specify the git install path to `/usr/local/git`

run `make prefix=/usr/local/git install`

will generate an git folder under `/usr/local`

for now, we can only use git command under `/usr/local/git/bin`(folder `bin` under git install path). for example: under this path we can run `./git --version` to check git version, other path doesn't work.

### 6. deploy git to global
run `vim /etc/profile` to add `export PATH=$PATH:/usr/local/git/bin` at the bottom of profile file.
press `esc` on keyboward, then enter `:wq!`

Finally, run `source /etc/profile`. no need to restart, you can use git command globally.

ps. You also can use `ln` to make git globally.

### 7. check git version

run `git --version` to check the git version.

### SSH密钥 - 仍然要求输入密码和密码--解决

1. Add Identity without Keychain 添加没有钥匙串的身份
`ssh-add ~/.ssh/id_rsa`

2. Add Identity Using Keychain 使用钥匙串添加身份
`ssh-add -K ~/.ssh/id_rsa`

### reference
[install git on linux ](https://www.cnblogs.com/wulixia/p/11016684.html)
