export function useEventListener(target: EventTarget, name: string, fn: any) {
  target.addEventListener(name, fn)
  onUnmounted(() => {
    target.removeEventListener(name, fn)
  })
}
