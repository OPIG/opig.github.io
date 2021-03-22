---
tag: vm
---

## 您的主机不满足在启用 Hyper-V 或 Device/Credential Guard 的情况下运行 VMware Workstation 的最低要求

### solution

step 1. 控制面板---》程序和功能 ---》启用或关闭Windows功能 ---》取消勾选 Hyper-V

step 2. 管理员权限打开powershell 输入命令： `bcdedit /set hypervisorlaunchtype off`

step 3. “win+ R“打开运行，输入gpedit.msc，打开本地组策略编辑器---》本地计算机策略---》计算机配置---》管理模板---》系统---》Device Guard---》基于虚拟化的安全设置为“已禁用”   

step 4. restart your computer