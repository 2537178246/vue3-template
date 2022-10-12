import { computed, getCurrentInstance } from 'vue'
import type { ComputedRef } from 'vue'

/**
 * 截取props
 * @author tuzhixiang
 * @time 2022/08/17
 * @param name string
 * @return ComputedRef<T | undefined>
 */

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance()!
  return computed(() => (vm.proxy?.$props as any)[name] ?? undefined)
}
