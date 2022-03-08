// import XtxSkeleton from "@/components/library/XtxSkeleton";
// import XtxCarousel from "@/components/library/XtxCarousel";
// import XtxMore from "@/components/library/XtxMore";
// import lazy from "@/components/directive/lazy";
// import XtxBread from "@/components/library/XtxBread";
// import XtxBreadItem from "@/components/library/XtxBreadItem";
//
// const library = {
//   install(app) {
//     // 骨架屏插件
//     app.component(XtxSkeleton.name, XtxSkeleton);
//     // 轮播图插件
//     app.component(XtxCarousel.name, XtxCarousel);
//     // 查看更多组件
//     app.component(XtxMore.name, XtxMore);
//     // 图片懒加载
//     app.directive("lazy", lazy);
//     // 面包屑组件
//     app.component(XtxBread.name, XtxBread);
//     app.component(XtxBreadItem.name, XtxBreadItem);
//   },
// };
// export default library;
import lazy from "@/components/directive/lazy";
import Message from "@/components/library/Message";
// require.context批量导入模块
const importFn = require.context("./", false, /\.vue$/);
const keys = importFn.keys();
export default {
  install(app) {
    app.directive("lazy", lazy);
    app.config.globalProperties.$message = Message;
    // 遍历文件路径
    keys.forEach((key) => {
      // 导入组件
      const component = importFn(key).default;
      // 注册组件
      app.component(component.name, component);
    });
  },
};
