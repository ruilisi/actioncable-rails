import Connection from "./connection"
import ConnectionMonitor from "./connectionMonitor"
import Consumer, { createWebSocketURL } from "./consumer"
import INTERNAL from "./internal"
import Subscription from "./subscription"
import Subscriptions from "./subscriptions"
import adapters from "./adapters"
import logger from "./logger"

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

export function createConsumer(url = getConfig("url") || INTERNAL.default_mount_path, jwtToken = null) {
  if (jwtToken) {
    internal.jwtToken = jwtToken
  }
  return new Consumer(url)
}

export function getConfig(name) {
  const element = document.head.querySelector(`meta[name='action-cable-${name}']`)
  if (element) {
    return element.getAttribute("content")
  }
}
