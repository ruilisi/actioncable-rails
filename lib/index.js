import internal from './internal'
import logger from './logger'
// eslint-disable-next-line import/no-cycle
import Consumer from './Consumer'

const createConsumer = (url, jwtToken = null) => {
  let _url
  if (url == null) {
    const configUrl = getConfig('url')
    if (configUrl === null) {
      _url = internal.default_mount_path
    } else {
      _url = configUrl
    }
  } else {
    _url = url
  }
  if (jwtToken) {
    internal.jwtToken = jwtToken
  }
  return new Consumer(createWebSocketURL(_url))
}

const getConfig = name => {
  const element = document.head.querySelector(`meta[name='action-cable-${name}']`)
  return element != null ? element.getAttribute('content') : undefined
}

const createWebSocketURL = url => {
  if (typeof url === 'function') {
    // eslint-disable-next-line no-param-reassign
    url = url()
  }
  if (url && !/^wss?:/i.test(url)) {
    const a = document.createElement('a')
    a.href = url
    // eslint-disable-next-line no-self-assign
    a.href = a.href
    a.protocol = a.protocol.replace('http', 'ws')
    return a.href
  }
  return url
}

const startDebugging = () => {
  logger.enabled = true
}

const stopDebugging = () => {
  logger.enabled = false
}

export default {
  createConsumer,
  getConfig,
  createWebSocketURL,
  startDebugging,
  stopDebugging
}
