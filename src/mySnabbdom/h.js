import vnode from './vnode';

/**
 * 自我手写的简易版h渲染函数，目前只支持如下三种情况（必须接收三个参数）
 * 1.h('li',{},'a')
 * 2.h('li',{},[])
 * 3.h('li',{},h())
 */
export default function (sel, data, c) {
  const elm = document.createElement(sel);
  if (typeof c === 'string' || typeof c === 'number') {
    elm.innerText = c;
    return vnode(sel, data, undefined, c, elm, data['key']);
  } else if (Array.isArray(c)) {
    let children = [];
    for (let i = 0; i < c.length; i++){
      if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('这是一个低配版本的渲染函数，只支持接收固定三个参数');
      }
      children.push(c[i]);
      elm.appendChild(c[i].elm);
    }
    return vnode(sel, data, children, undefined, elm, data['key']);
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    let children = [c];
    elm.appendChildc.elm;
    return vnode(sel, data, children, undefined, elm, data['key']);
  } else {
    throw new Error('这是一个低配版本的渲染函数，只支持接收固定三个参数');
  }
}