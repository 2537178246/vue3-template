// 基准大小
const baseSize = 32
let defaultScale = 1
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  defaultScale = document.documentElement.clientWidth / 3840
  // 设置页面根节点字体大小, 字体大小最小为12
  const fontSize = (baseSize * Math.min(defaultScale, 2)) > 12 ? (baseSize * Math.min(defaultScale, 2)) : 12
  document.documentElement.style.fontSize = fontSize + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem,这里最好加上节流
window.onresize = () => setRem()
export {}
