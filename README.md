---
title: 手写虚拟dom和diff算法
---

## 各函数模块功能介绍

- vnode模块是标准的js对象，用来表示虚拟dom
- h函数用来生成虚拟dom
- patch函数用来将虚拟dom转换为真实dom上树
- patchVnode函数用来处理，新旧虚拟dom是同一个虚拟节点的情况
- updateChildren函数用来处理新旧虚拟节点是同一个节点，并且都有children属性的情况

## diff算法流程图

![diff算法流程图](https://rocketturtlewqt.github.io/20210516113416aft.png)

## 用法

```js
  // devServer: {
  //   port: 9090,
  //   contentBase: 'www'
  // }
```

- 将webpack.config下的devSerer配置选项去掉，开启dev-server

- 在用webpack搭建的环境下，可以综合src目录下的 index-体验diff算法等和www目录下的index.html 来尝试体验diff算法