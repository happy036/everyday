import xtxConfirm from "@/components/library/XtxConfirm";
import { createVNode, render } from "vue";
// 创建目标容器
const container = document.createElement("div");
document.body.appendChild(container);
// 供外部调用的用来渲染确认框组件的方法
export default function Confirm({ title, content }) {
  return new Promise(function (resolve, reject) {
    // 用户点击确认按钮时执行的方法
    const onOkButtonClick = () => {
      resolve();
      render(null, container);
    };
    // 用户点击删除按钮时执行的方法
    const onCancelClick = () => {
      reject();
      vNode.el.classList.remove("fade");
      vNode.el.children[0].classList.remove("fade");
      setTimeout(() => {
        render(null, container);
      }, 400);
    };
    // 将xtxConfirm单文件组件对象转换成虚拟DOM对象
    const vNode = createVNode(xtxConfirm, {
      title,
      content,
      onOkButtonClickHandler: onOkButtonClick,
      onCancelClickHandler: onCancelClick,
    });
    // 渲染xtxConfirm
    render(vNode, container);
    // 执行入场动画
    setTimeout(() => {
      vNode.el.classList.add("fade");
      vNode.el.children[0].classList.add("fade");
    });
  });
}
