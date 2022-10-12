
export const useKBToBase = (
  num: number | string,
  isUnit: boolean = true
): string => {
  const val = Number(num)
  const baseUnit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  const baseSize = 0.1
  let i = 1
  while (val > ((1024 ** i) * baseSize)) {
    i++
  }
  if (i === 1) return (val * 1024).toFixed(2) + (isUnit ? baseUnit[i - 1] : '')
  return (val / ((1024 ** (i - 2)) ?? 1)).toFixed(2) + (isUnit ? baseUnit[i - 1] : '')
}
