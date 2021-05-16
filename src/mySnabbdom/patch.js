import vnode from './vnode';
import createElement from './createElement';
import patchVnode from './patchVnode';
/**
 * patch函数用来将虚拟dom转换为真实dom上树
 */
export default function (oldVnode, newVnode) {
  if (oldVnode.sel === '' || oldVnode.sel == undefined) {
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], oldVnode.innerText, oldVnode, undefined);
  }

  if (newVnode.key === oldVnode.key && newVnode.sel === oldVnode.sel) {
    patchVnode(newVnode, oldVnode);
  } else {
    //新旧节点不是同一个虚拟节点
    const newDom = createElement(newVnode);
    oldVnode.elm.parentNode.insertBefore(newDom, oldVnode.elm);
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}