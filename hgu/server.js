import express from 'express';
import { fileURLToPath } from 'url';  // 引入 fileURLToPath
import { dirname } from 'path';      // 引入 dirname
import path from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url); // 获取当前模块的文件名
const __dirname = dirname(__filename);             // 获取当前模块的目录名

const app = express();

// 允许跨域请求，可根据需要设置更严格的域名
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// 处理API请求
app.get('/api', async (req, res) => {
  try {
    // 读取存储新闻数据的JSON文件
    const data = await fs.readFile(path.join(__dirname, 'data.json'), 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api`);
});
