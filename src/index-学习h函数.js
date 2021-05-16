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

// const myVnode = h('ul', {
//   class: {
//     'box': true
//   }
// }, [
//   h('li', '技'),
//   h('li', '术'),
//   h('li', '博'),
//   h('li', '客'),
//   h('a', {
//     props: {
//       href: 'https://rocketturtlewqt.github.io'
//     }
//   }, '地址')
// ]);

const myVnode = h('ul', {}, [
  h('li', {}, '技'),
  h('li', {}, '术'),
  h('li', {} ,'博'),
  h('li', {}, '客'),
  h('li', {}, [
    h('span', {}, 'hello'),
    h('span', {}, 'world')
  ])
]);


console.log(myVnode);

patch(container, myVnode);
