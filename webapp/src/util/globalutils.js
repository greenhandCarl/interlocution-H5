const globalutils = {}

const deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0
// 是否是android
globalutils.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone
// 是否是IOS
globalutils.deviceIsIos = /iP(ad|home|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone

export default globalutils
