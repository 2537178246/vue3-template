/**
 * @file 压缩解压工具
 * @author xuyan
 */

import pako from 'pako'

function uintToString(uintArray) {
  const array = new Uint16Array(uintArray)
  // 数据量大了后, 会超出堆栈, Maximum call stack size exceeded
  // return String.fromCharCode.apply(null, array);
  let strData = ''
  const chunk = 8 * 1024
  let i
  for (i = 0; i < array.length / chunk; i++) {
    strData += String.fromCharCode.apply(
      null,
      array.slice(i * chunk, (i + 1) * chunk)
    )
  }
  strData += String.fromCharCode.apply(null, array.slice(i * chunk))
  return strData
}

export function unzip(b64Data) {
  const strData = window.atob(b64Data)
  const charData = strData.split('').map((x) => x.charCodeAt(0))
  const binData = new Uint8Array(charData)
  // return pako.inflate(binData, { to: 'string' });
  const data = pako.inflate(binData)
  return window.decodeURIComponent(escape(uintToString(data)))
}

export function zip(str) {
  const data = pako.deflate(str)
  const res = uintToString(data)
  return btoa(res)
}
