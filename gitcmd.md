git command help manual
==================
*git常用命令*<br/>
from : [http://www.cnblogs.com/cspku/articles/Git_cmds.html](http://www.cnblogs.com/cspku/articles/Git_cmds.html)<br/>
Markdown语法：[https://github.com/guoyunsky/Markdown-Chinese-Demo/blob/master/README.md](https://github.com/guoyunsky/Markdown-Chinese-Demo/blob/master/README.md)<br/>

项目开发中常用命令
----------------

### create a new local repository
		touch README.md
		git init
		git status
		git add README.md
		git commit -m "first commit"
		git remote add origin <url>
		git push origin master


git详细命令用法
--------------------

### 查看、添加、提交、删除、找回，重置修改文件

**help**<br/>
		format: help [\<command\>]<br/>
		--显示command的help文档<br/>
**show**<br/>
		format: show [id]<br/>
		--显示某次提交内容（diff值）<br/>
**add**<br/>
		format: add (\<file\>|\<dir\>|.)<br/>
		--将文件或文件夹提交到本地暂存区，.表示当前目录中的所有工作文件，包括子文件<br/>
**reset**<br/>
		format: reset (\<file\>|--|-- .|--hard)<br/>
		--从暂存区恢复到工作文件<br/>
		reset --<br/>
		--恢复提交的所有文件<br/>
		reset [-- ].<br/>
		--恢复当前文件夹下提交的文件<br/>
		reset --hard<br/>
		--恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改（慎用）<br/>
**revert**<br/>
		format: revert (\<id\>|HEAD)<br/>
		--恢复某次提交状态,HEAD恢复最后一次提交状态<br/>
