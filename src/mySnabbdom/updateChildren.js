import createElement from './createElement';
import patchVnode from './patchVnode';

function judge(oldVnode, newVnode) {
  return oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key;
}
/**
 * updateChildren函数用来处理新旧虚拟节点是同一个节点，并且都有children属性的情况
 */
export default function updateChildren(parentElm, oldCh, newCh) {
  let newStartIdx = 0;
  let oldStartIdx = 0;
  let newEndIdx = newCh.length - 1;
  let oldEndIdx = oldCh.length - 1;
  let mp;

  while (newStartIdx <= newEndIdx && oldStartIdx <= oldEndIdx) {
    console.log(`newStartIdx：${newStartIdx}，newEndIdx：${newEndIdx}`);
    console.log(`oldStartIdx：${oldStartIdx}，oldEndIdx：${oldEndIdx}`);
    if (!oldCh[oldStartIdx]) {
      oldStartIdx++;
    }
    if (!oldCh[oldEndIdx]) {
      oldEndIdx--;
    }
    if (judge(oldCh[oldStartIdx], newCh[newStartIdx])) {
      console.log('命中新前和旧前');
      patchVnode(newCh[newStartIdx], oldCh[oldStartIdx]);
      newStartIdx++;
      oldStartIdx++;
    } else if (judge(oldCh[oldEndIdx], newCh[newEndIdx])) {
      console.log('命中新后与旧后');
      patchVnode(newCh[newEndIdx], oldCh[oldEndIdx]);
      newEndIdx--;
      oldEndIdx--;
    } else if (judge(oldCh[oldStartIdx], newCh[newEndIdx])) {
      console.log('命中新后与旧前');
      patchVnode(newCh[newEndIdx], oldCh[oldStartIdx]);
      parentElm.insertBefore(oldCh[oldStartIdx].elm, oldCh[oldEndIdx].elm.nextSibling);
      newEndIdx--;
      oldStartIdx++;
    } else if (judge(oldCh[oldEndIdx], newCh[newStartIdx])) {
      console.log('命中新前与旧后');
      patchVnode(newCh[newStartIdx], oldCh[oldEndIdx]);
      parentElm.insertBefore(oldCh[oldEndIdx].elm, oldCh[oldStartIdx].elm);
      newStartIdx++;
      oldEndIdx--;
    } else {
      console.log('都没命中');
      if (!mp) {
        mp = new Map();
        for (let i = oldStartIdx; i <= oldEndIdx; i++){
          mp.set(oldCh[i].key, i);
        }
      }
      let oldVnodeIdx = mp.get(newCh[newStartIdx].key);
      if (oldCh[oldVnodeIdx]) {
        patchVnode(newCh[newStartIdx], oldCh[oldVnodeIdx]);
        parentElm.insertBefore(oldCh[oldVnodeIdx].elm, oldCh[oldStartIdx].elm);
        oldCh[oldVnodeIdx] = undefined;
      } else {
        parentElm.insertBefore(newCh[newStartIdx].elm, oldCh[oldStartIdx].elm);
      }
      newStartIdx++;
    }
  }
  if (newStartIdx <= newEndIdx) {
    for (let i = newStartIdx; i <= newEndIdx; i++){
      parentElm.insertBefore(createElement(newCh[newEndIdx]), oldCh[oldStartIdx]);
    }
  } else if (oldStartIdx <= oldEndIdx) {
    for (let i = oldStartIdx; i <= oldEndIdx; i++){
      if(oldCh[i]) parentElm.removeChild(oldCh[i].elm);
    }
  }
}