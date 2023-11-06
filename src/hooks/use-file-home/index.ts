/**
 * 获取文件
 * @param url: string
 * examples /src/assets/img/xxx.png
 */
export const useFileHome = (url: string): string => {
  const modules = import.meta.glob('/src/**/*.{png,svg,jpg,jpeg}', {
    eager: true,
  })
  if (modules[url]) return (modules[url] as any).default
  const pathList = url.split('/')
  console.warn(`Error: ${pathList[pathList.length - 1]} is wrong path`)
  return ''
}
