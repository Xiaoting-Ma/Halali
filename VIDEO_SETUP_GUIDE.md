# 视频背景设置指南

## 🎬 功能说明

首页Hero部分现在支持**视频优先、图片fallback**的智能背景系统：

1. ✅ **优先加载视频** - 如果视频文件存在且能正常播放
2. ✅ **自动切换fallback** - 视频加载失败时自动显示高质量背景图片
3. ✅ **poster预览** - 视频加载前先显示预览图
4. ✅ **错误处理** - 完善的错误监听和状态管理

---

## 📁 方法1：上传本地视频文件（推荐用于生产环境）

### 步骤：

1. **将视频文件放在 `/public` 目录**
   ```
   项目根目录/
   ├── public/
   │   └── hero-video.mp4  ← 你的视频文件
   ├── src/
   └── package.json
   ```

2. **视频要求：**
   - 文件名：`hero-video.mp4`（或修改代码中的路径）
   - 格式：MP4 (H.264编码) - 浏览器兼容性最好
   - 分辨率：建议 1920x1080 或更高
   - 文件大小：建议 < 10MB（确保快速加载）
   - 时长：5-15秒的循环视频效果最佳
   - 内容：外卖配送、骑手、美食等相关场景

3. **完成！** 刷新页面，视频会自动播放

---

## 🌐 方法2：使用在线视频链接

如果你已经将视频上传到云存储或CDN，可以修改代码中的视频URL：

### 修改位置：`/src/app/components/HomePage.tsx`

找到这一行：
```jsx
<source src="/hero-video.mp4" type="video/mp4" />
```

改为你的视频URL：
```jsx
<source src="https://your-cdn.com/path/to/video.mp4" type="video/mp4" />
```

### 推荐的免费视频托管服务：

#### 1️⃣ **GitHub** (简单稳定)
- 上传到 public repository
- URL格式：`https://github.com/用户名/仓库名/raw/main/hero-video.mp4`

#### 2️⃣ **Cloudinary** (专业CDN)
- 注册免费账号：https://cloudinary.com/
- URL格式：`https://res.cloudinary.com/your-cloud-name/video/upload/v123456/video.mp4`

#### 3️⃣ **AWS S3 / Google Cloud Storage** (企业级)
- 设置bucket为public
- 使用公开访问URL

---

## 🔧 当前配置

### 视频路径：
```javascript
/hero-video.mp4
```

### Fallback图片：
```javascript
https://images.unsplash.com/photo-1765659096717-f21c8f832de0...
```
*高质量外卖骑手背景图*

### 工作流程：
1. **尝试加载视频** → `/hero-video.mp4`
2. **加载失败？** → 自动切换到Unsplash图片
3. **遮罩层** → 50%黑色遮罩确保文字清晰

---

## 🎨 自定义设置

### 修改视频路径
找到 `HomePage.tsx` 第104行：
```jsx
<source src="/hero-video.mp4" type="video/mp4" />
```

### 修改fallback图片
找到 `HomePage.tsx` 第121行：
```jsx
backgroundImage: `url('YOUR_IMAGE_URL')`
```

### 调整遮罩透明度
找到 `HomePage.tsx` 第128行：
```jsx
<div className="absolute inset-0 bg-black/50"></div>
```
- `bg-black/50` = 50%透明度
- 可改为 `bg-black/40`（40%）或 `bg-black/60`（60%）

---

## 🧪 测试方法

### 测试视频是否正常播放：
1. 打开浏览器开发者工具 (F12)
2. 查看Console，如果看到：
   - ✅ 无错误 = 视频正常播放
   - ⚠️ "Video failed to load" = 已切换到fallback图片

### 强制测试fallback：
临时修改视频路径为一个不存在的文件：
```jsx
<source src="/non-existent-video.mp4" type="video/mp4" />
```
页面应该立即显示fallback图片

---

## 🚀 生产环境建议

1. **使用CDN** - 将视频托管在CDN上加速全球访问
2. **多格式支持** - 提供 WebM 和 MP4 两种格式
   ```jsx
   <source src="/hero-video.webm" type="video/webm" />
   <source src="/hero-video.mp4" type="video/mp4" />
   ```
3. **压缩视频** - 使用 HandBrake 或 FFmpeg 压缩视频
4. **懒加载** - 考虑只在桌面端加载视频，移动端显示图片

---

## ❓ 常见问题

**Q: 视频不播放？**
A: 检查：
- 文件路径是否正确
- 视频格式是否为MP4 (H.264)
- 浏览器是否支持自动播放（muted属性必须存在）

**Q: 视频太大加载慢？**
A: 
- 使用视频压缩工具减小文件大小
- 使用CDN加速
- 考虑降低分辨率或码率

**Q: 想在移动端显示图片，桌面端显示视频？**
A: 可以添加媒体查询或使用 `window.innerWidth` 判断

---

## 📝 技术实现细节

- **useState** - 管理视频错误状态
- **useRef** - 引用video元素
- **useEffect** - 确保视频自动播放
- **onError** - 监听视频加载错误，自动切换fallback
- **poster** - 视频加载前显示的预览图

完整代码在：`/src/app/components/HomePage.tsx`
