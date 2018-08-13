const globalutils = {}

const deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0
// 是否是android
globalutils.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone
// 是否是IOS
globalutils.deviceIsIos = /iP(ad|home|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone

function isClass (obj) {
  if (obj == null) {
    return 'null'
  }
  if (obj === undefined) {
    return 'undefined'
  }
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

export function deepClone (obj) {
  var result
  var oClass = isClass(obj)
  if (oClass === 'object') {
    result = {}
  } else if (oClass === 'array') {
    result = []
  } else {
    return obj
  }
  for (var key in obj) {
    var copy = obj[key]
    if (isClass(obj[key]) === 'object') {
      result[key] = deepClone(copy)
    } else if (isClass(obj[key]) === 'array') {
      result[key] = deepClone(copy)
    } else {
      result[key] = obj[key]
    }
  }
  return result
}

globalutils.deepClone = deepClone

export default globalutils
