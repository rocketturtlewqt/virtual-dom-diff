import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  // h,
} from "snabbdom";
import h from './mySnabbdom/h';

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

const container = document.getElementById("container");

const vnode1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
]);

patch(container, vnode1);

const vnode2 = h('ul', {}, [
  h('li', { key: 'E' }, 'E'),
  h('li', { key:'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
]);

console.log('vnode1---', vnode1);
console.log('vnode2---', vnode2)

const btn = document.getElementById("btn");
btn.onclick = function () {
  patch(vnode1, vnode2);
}

