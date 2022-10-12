
/**
 * 获取文件
 * @author tuzhixiang
 * @time 2022/08/17
 * @param url: string
 * examples /src/assets/img/xxx.png
 */
export default function useFileHome(url: string) {
  const modules = import.meta.glob('/src/**/*.{png,svg,jpg,jpeg}', { eager: true })
  if (modules[url]) return (modules[url] as any).default
  const pathList = url.split('/')
  console.error(`Error: ${pathList[pathList.length - 1]} is wrong path`)
  return ''
}
