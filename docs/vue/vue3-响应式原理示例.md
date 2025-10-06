---
title: Vue 3 Reactivity
description: Vue 3 响应式系统原理与实践
---

# Vue 3 响应式原理示例

通过几个典型的场景，来判断是否掌握 Vue 3 响应式系统原理。

首先在定义一个使用了按钮组件的父组件：

```vue
<BtnDemo :count="count"></BtnDemo>
<button type="button" @click="count++">点我</button>
<script setup lang="ts">
import BtnDemo from '@/components/Layout/BtnDemo.vue'
const count = ref(0);
</script>
```

然后子组件内容为：

```vue
<template>
  <div>得到的传入的属性:{{ count }}</div>
  <div>double count:{{ doubleCount }}</div>
</template>
<script setup>
import { computed, ref, watchEffect } from 'vue';
const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})
// 场景1
const doubleCount = ref(props.count * 2)

// 场景2
// const doubleCount = ref(0);
// watchEffect(()=>{
//   doubleCount.value = props.count * 2;
// })

// 场景3
// function useDoubleCount(count) {
//   const doubleCount = ref(count * 2)
//   watchEffect(()=>{
//     doubleCount.value = count * 2;
//   })
//   return doubleCount;
// }
// const doubleCount = useDoubleCount(props.count);

// 场景4
// const doubleCount = computed(()=>props.count * 2)

// 场景5
// function useDoubleCount(count) {
//   const doubleCount = computed(()=>count * 2)
//   return doubleCount;
// }
// const doubleCount = useDoubleCount(props.count);
</script>
```

当我点击按钮修改数据时，页面会自动更新吗？如果以上内容无法正确答对，那说明你对 Vue 3 响应式系统原理的理解还不够深入。

## 到底什么是响应式？

响应式描述的是函数与数据的关联，不是与数据的关联，数据和数据是没法关联的。
Vue 也是用 JS 写的，在原生 JS 里边一个数据的变化，他不会影响到另一个数据，JS 做不到的事情，Vue 也做不到。

比如我们来看：

```js
<template>
    <div>得到的传入的属性:{{count}}</div>
    <div>double count:{{doubleCount}}</div>
</template>
```

像这个模版，模版在 vue 里面是啥？就是一个 render 函数。
这个函数里面用到了两个数据，一个是 count，一个是 doubleCount；还是函数和数据进行的关联。
将来这里面的数据变化以后，这个 render 函数就会重新执行。

**vue 的响应式是函数和数据的关联，这是一个基本的前提。**

## 谁和谁的关联？

那么响应式是函数和数据的关联，到底是什么函数？哪个函数？谁的函数？

### 1. 被监控的函数

一个普通的函数是无法和数据关联的，比如：

```js
function abc(){
  console.log(props.count)
}

abc();
```

当我修改 `props.count` 以后，这个函数是不会再次执行的，因为这个函数并没有被监控。

那哪些函数可以被监控呢？

- render
- computed
- watchEffect
- watch

这些函数都会被监控，监控函数运行期间，跟哪些数据产生了关联。（如何实现这一点这篇不过多赘述，主要是讲示例）

### 2. 函数运行期间用到了响应式数据

vue 响应式数据无非是两种，ref 和 reactive，这两种数据都可以被监控。
那有人问 computed 和 props 呢？
computed 其实就是 ref，props 就是 reactive。

并且响应式数据一定是对象，原始数据类型是不可能成为响应式数据的，一定谨记一点就是，**Vue 永远做不到 JS 都做不到的事情。**

### 3. 响应式数据变化会导致函数重新运行

因为这个函数已经被监控了，他在运行期间已经产生了和响应式数据的关联，所以当响应式数据发生变化的时候，这个函数就会重新运行。

## 再回顾示例

### 场景1

不会更新

```js
// 不会更新
const doubleCount = ref(props.count * 2)
```
doubleCount 是数据，props.count 也是一个数据，数据和数据是不会产生关联的，所以 pass。

但是额外提一下，doubleCount 和 template 这个 render 函数是产生关联了的，如果 doubleCount 变化了，那么就会触发重新渲染

### 场景2

会更新

```js
const doubleCount = ref(0);
watchEffect(()=>{
    doubleCount.value = props.count * 2;
}) 
```
watchEffect 回调函数运行期间用到了响应式数据，props.count 变动，watchEffect 回调函数也会重新执行。

### 场景3

不会更新

```js
function useDoubleCount(count) {
    const doubleCount = ref(count * 2)
    watchEffect(()=>{
        doubleCount.value = count * 2;
    })
    return doubleCount;
}
const doubleCount = useDoubleCount(props.count);
```
count 是原始类型，原始类型不是响应式数据，虽然这个函数被监控了，但是他没有用到任何的响应式数据。

如何修改？把count 修改为 props 传入。

### 场景4

会更新

```js
const doubleCount = computed(()=>props.count * 2)
```

同理，不过多赘述。

### 场景5

不会更新

```js
function useDoubleCount(count) {
    const doubleCount = computed(()=>count * 2)
    return doubleCount;
}
const doubleCount = useDoubleCount(props.count);   
```

count 原始类型 不过多赘述。