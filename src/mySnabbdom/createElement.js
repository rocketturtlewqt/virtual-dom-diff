export default function createElement(vnode) {
  const newDom = document.createElement(vnode.sel);
  if (vnode.text !== '' && (vnode.children == undefined || vnode.children.length === 0)) {
    newDom.innerText = vnode.text;
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    for (let i = 0; i < vnode.children.length; i++){
      newDom.appendChild(createElement(vnode.children[i]));
    }
  }
  vnode.elm = newDom;
  return newDom;
}