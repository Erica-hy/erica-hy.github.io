---
layout: page
title: ''
sidebar: false
outline: false
lastUpdated: false
---

<section class="full-hero" role="img" aria-label="站点主视觉">
  <div class="hero-content">
    <h1>小羊的博客</h1>
    <p>零星的优秀，也能拼凑成山河</p>
    <a class="hero-btn" href="guide/start">开始阅读</a>
  </div>
</section>

<style>

/* 让内容突破文档容器，铺满全宽 */
.full-hero {
  position: fixed;
  inset: 0;
  width: 100svw;
  height: 100svh;
  display: grid;
  place-items: center;
  background-image: url('hero.png'); /* 将图片放在 docs/public/hero.png */
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

/* 半透明遮罩，提升文字可读性 */
.full-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 1.25rem;
  color: #fff;
  max-width: 900px;
}

.hero-content h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.1;
  margin: 0 0 0.75rem;
}

.hero-content p {
  font-size: clamp(1rem, 2.2vw, 1.375rem);
  opacity: 0.95;
  margin: 0 0 1.5rem;
}

.hero-btn {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  background: var(--vp-c-brand, #646cff);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: transform .15s ease, opacity .15s ease;
}
.hero-btn:hover { transform: translateY(-1px); opacity: .95; }
</style>