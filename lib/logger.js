import adapters from "./adapters"

const logger = {
  log: (...messages) => {
    if (logger.enabled) {
      adapters.logger.log("[ActionCable]", ...messages, Date.now())
    }
  },
  enabled: false,
}

export default logger
