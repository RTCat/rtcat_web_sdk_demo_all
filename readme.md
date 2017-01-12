## 实时猫 Web SDK Demo 合集
基于 [实时猫 JS SDK](https://shishimao.com) 开发的样例 Demo,Demo运行的服务器基于[Node](https://nodejs.org/en/)开发。

## 说明
此样例用于演示使用`实时猫SDK`主要功能，访问实时猫开发者文档，查看[样例代码说明](http://docs.shishimao.com/03.%20web/03.%20demo.html)。

## 功能
#. 检测浏览器兼容性
#. 获取本地音视频
#. 互动白板
#. 多人音视频通信
#. 文字聊天和文件传输
#. 错误信息和日志
#. 高级主题：屏幕分享

## 使用
#. `git clone `
#. `cd `
#. `npm start`
#. 打开浏览器，在地址栏输入`https://localhost:8080/`作为第一个客户端，忽略浏览器的安全证书错误，进入页面
#. 从多个样例中选择一个进行测试
#. (多人通信类型的样例需要)再打开一个浏览器窗口，输入相同地址，作为第二个客户端
#. (屏幕分享样例需要)请先安装屏幕分享插件
谷歌商店地址：`https://chrome.google.com/webstore/detail/realtimecat-screensharing/kopddpjmdlllnpkpcphndjiaohbakkjb?hl=zh-CN&gl=US`
国内地址：通过`https://shishimao.com/rooms/downloads/RealTimeCat-ScreenSharing-Extension_v0.2.0.crx`下载插件，并拖拽到浏览器`chrome://extensions`页面
#. 可以在Config.js修改`API_KEY`、`SECRET`、`SESSION`，使用个人项目信息创建会话。获取方式请参考[实时猫开发者文档](http://docs.shishimao.com/02.%20getting-started/02.%20dashboard-and-projects.html#)




