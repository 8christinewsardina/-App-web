# 乡村硅谷打卡App

这是一个智能体移动应用，用于个性化任务管理和共享打卡。

## 功能
- 许可协议同意
- 主页导航
- 任务列表
- 打卡功能（支持照片上传到云存储）
- 用户资料

## 安装
1. 克隆仓库
2. 运行 `npm install`
3. 配置阿里云OSS：替换App.js中的region、accessKeyId、accessKeySecret和bucket

## 运行
运行 `npm start` 启动Expo开发服务器。

## 云存储
集成阿里云OSS用于上传打卡照片。确保配置正确的OSS凭据。
