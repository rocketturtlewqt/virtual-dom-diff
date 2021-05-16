/**
 * 虚拟dom就是一个js对象
 */
export default function Vnode(sel, data, children, text, elm, key) {
  return {
    sel,
    data,
    children,
    text,
    elm,
    key
  }
}