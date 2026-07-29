# 导航栏语言切换功能修改计划

## 需求概述

1. 将语言切换按钮移动到导航栏最右侧
2. 实现真正的页面内中英文切换功能（不是跳转）
3. 优化导航栏布局，将 logo 往左移动

## 修改方案

### 1. 多语言数据方案

使用 HTML data 属性存储双语内容：
```html
<h1 data-en="Introduction" data-zh="简介">Introduction</h1>
```

### 2. 导航栏结构修改

将语言切换按钮移入导航栏右侧操作区：
```html
<div class="nav-actions">
    <button class="lang-toggle-nav" id="langToggle">EN</button>
    <button class="mobile-menu-btn">...</button>
</div>
```

### 3. CSS 样式

- `.nav-actions`：导航栏右侧操作区布局
- `.lang-toggle-nav`：语言切换按钮样式
- 调整 `.nav-container` padding 使 logo 更靠左

### 4. JavaScript 逻辑

- `toggleLanguage()`：切换语言
- `applyLanguage(lang)`：应用语言到所有带 data 属性的元素
- `localStorage` 保存用户语言偏好

## 实施步骤

1. 修改导航栏 HTML 结构
2. 添加 CSS 样式
3. 添加 JavaScript 逻辑
4. 为所有内容添加 `data-en` 和 `data-zh` 属性
5. 删除原浮动语言按钮

## 验证方案

1. 点击按钮切换语言，文本正确切换
2. 刷新页面后语言设置保持
3. 语言按钮在导航栏最右侧
4. 移动端响应式正常
