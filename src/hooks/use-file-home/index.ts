import { ElMessage } from 'element-plus'

/**
 * 获取文件
 * @param url: string
 * examples /src/assets/img/xxx.png
 */
export default function useFileHome(url: string) {
  const modules = import.meta.globEager('/src/**/*.{png,svg,jpg,jpeg}')
  if (modules[url]) return modules[url].default
  else {
    ElMessage({
      message: 'Error url is wrong path',
      type: 'error',
      showClose: true
    })
    console.error('Error url is wrong path')
  }
}
