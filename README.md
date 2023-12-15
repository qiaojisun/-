作业目标
模仿河北地质大学主页，考查HTML、CSS、JavaScript、Node.js和Vue.js的基本应用能力。

作业要求

第一部分：准备数据

访问河北地质大学主页；
手动复制“学校要闻”、“综合新闻”、“学术动态”、“通知广告”板块中的新闻标题；
创建一个data.json文件，自行组织数据结构，将复制的新闻标题按照JSON格式存储。


第二部分：Node.js服务器

使用Node.js的http模块创建服务器，监听3000端口；
使用fs模块读取data.json文件内容；
制作API接口，当访问特定路由（例如/api）时，返回data.json中的内容。


第三部分：前端页面

根据Vue.js文档——快速上手内容，创建Vue.js项目，项目名称：hgu-vue；
编写App.vue，模仿河北地质大学的主页布局和风格；
使用HTML和CSS完成页面结构和样式设计。


第四部分：前后端交互

在App.vue中，使用JavaScript的fetch方法从Node.js服务器的API接口获取数据；
通过计算属性将获取的新闻标题显示在页面的相应位置。


第五部分：生产部署

执行npm run build生成dist目录；
在Windows或Linux平台下载并安装Nginx；
使用Nginx部署本项目。
