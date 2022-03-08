// 如果通过 JS 的方式渲染 VUE 组件
// 1. 导入目标 vue 组件
// 2. 创建一个组件渲染容器
// 3. 将目标单文件vue组件渲染成虚拟 DOM 对象
// 4. 将组件的虚拟DOM对象渲染成真实 dom 对象

// 1. 导入目标 vue 组件
import XtxMessage from "@/components/library/XtxMessage";
import { createVNode, render } from "vue";
// console.log(XtxMessage);
// 2. 创建一个组件渲染容器
const container = document.createElement("div");
document.body.appendChild(container);
let timer = null;
export default function Message({ type, text }) {
  // 3. 将目标单文件vue组件渲染成虚拟 DOM 对象
  const vNode = createVNode(XtxMessage, { type, text });
  // console.log(vNode);
  // 4. 将组件的虚拟DOM对象渲染成真实 dom 对象,并将其渲染到container容器中
  render(vNode, container);
  clearTimeout(timer);
  timer = setTimeout(() => {
    // render(null, container);
    vNode.component.proxy.show = false;
    container._vnode = null;
  }, 3000);
}
