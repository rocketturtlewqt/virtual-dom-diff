import h from './mySnabbdom/h';
import patch from './mySnabbdom/patch';

// const newVnode = h('p', {}, '你好');
// const newVnode = h('p', {}, [
//   h('span', {}, 'hello world'),
//   h('ul', {}, [
//     h('li', {}, '酒')
//   ])
// ]);
const newVnode1 = h('p', {}, [
  h('span', { key: 'A' }, 'A'),
  h('span', { key: 'B' }, 'B'),
  h('span', { key: 'C' }, 'C'),
  h('span', { key: 'E' }, 'E'),
  h('span', { key: 'F' }, 'F')
]);
const newVnode2 = h('p', {}, [
  h('span', { key: 'A' }, 'A'),
  h('span', { key: 'C' }, [
    h('span', { key: 'c' }, 'c'),
  ]),
  h('span', { key: 'B' }, [
    h('span', { key: 'a' }, 'a'),
    h('span', { key: 'b' }, 'b'),
  ]),
  h('span', { key: 'D' }, 'hello world'),
  // h('span', { key: 'E' }, 'E'),
  // h('span', { key: 'B' }, 'B'),
  // h('span', { key: 'A' }, 'A'),
  // h('span', { key: 'C' }, 'C'),
  h('span', { key: 'F' }, [h('span', { key: 'f' }, 'f')])
]);

// console.log(newVnode1);
// console.log(newVnode2);

const container = document.getElementById('container');
const btn = document.getElementById('btn');

patch(container, newVnode1);

btn.onclick = function () {
  patch(newVnode1, newVnode2);
}

