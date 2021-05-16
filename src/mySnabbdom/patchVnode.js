import createElement from './createElement';
import updateChildren from './updateChildren';
/**
 * patchVnode函数用来处理，新旧虚拟dom是同一个虚拟节点的情况
 */
export default function patchVnode(newVnode, oldVnode) {
  if (oldVnode === newVnode) return;
  if (newVnode.text !== '' && (newVnode.children === undefined || newVnode.children.length === 0)) {
    if (newVnode.text === oldVnode.text) return;
    else {
      oldVnode.elm.innerText = newVnode.text;
      oldVnode.text = newVnode.text;
    }
  } else {
    //进行精细化比较
    if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
    } else {
      oldVnode.elm.innerText = '';
      for (let i = 0; i < newVnode.children.length; i++){
        oldVnode.elm.appendChild(createElement(newVnode.children[i]));
      }
    }
    // console.log(oldVnode);
  }
}