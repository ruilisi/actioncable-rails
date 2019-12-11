import Connection from "./connection"
import ConnectionMonitor from "./connectionMonitor"
import Consumer, { createWebSocketURL } from "./consumer"
import INTERNAL from "./internal"
import Subscription from "./subscription"
import Subscriptions from "./subscriptions"
import adapters from "./adapters"
import logger from "./logger"

export function getConfig(name) {
  const element = document.head.querySelector(`meta[name='action-cable-${name}']`)
  if (element) {
    return element.getAttribute("content")
  }
  return null
}

export function createConsumer(url = getConfig("url") || INTERNAL.default_mount_path, jwtToken = null) {
  if (jwtToken) {
    INTERNAL.jwtToken = jwtToken
  }
  return new Consumer(url)
}

export {
  Connection,
  ConnectionMonitor,
  Consumer,
  INTERNAL,
  Subscription,
  Subscriptions,
  adapters,
  createWebSocketURL,
  logger,
}
