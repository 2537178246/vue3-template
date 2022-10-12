import { customRef } from 'vue'
import type { Ref } from 'vue'

/**
 * 防抖节流
 * @author tuzhixiang
 * @time 2022/09/27
 * @param value <T>
 * @param delay <number>ms
 * @return Ref<T>
 */
export const useDebouncedRef = <T>(
  value: T,
  delay: number = 200
): Ref<T | undefined> => {
  let timeout: NodeJS.Timeout | null
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newVal
          trigger()
        }, delay)
      }
    }
  })
}
