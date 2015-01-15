git command help manual
==================
*git常用命令*

### 项目开发中常用命令



### 查看、添加、提交、删除、找回，重置修改文件

**help**<br/>
format: help [\<command\>]
--显示command的help文档
<br/>
**show**<br/>
format: show [id]
--显示某次提交内容（diff值）
<br/>
**add**<br/>
format: add (\<file\>|\<dir\>|.)
--将文件或文件夹提交到本地暂存区，.表示当前目录中的所有工作文件
<br/>
**reset**<br/>
format: reset (\<file\>|--|-- .|--hard)
--从暂存区恢复到工作文件
	reset --
	--恢复提交的所有文件
	reset [-- ].
	--恢复当前文件夹下提交的文件
	reset --hard
	--恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改（慎用）
<br/>
**revert**<br/>
format: revert (\<id\>|HEAD)
--恢复某次提交状态,HEAD恢复最后一次提交状态
