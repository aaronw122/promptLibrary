const app = require('./app')
const config = require('./utils/config')
import logger from './utils/logger'

app.listen(config.PORT, () => {
  logger.info(`server running on port ${config.PORT}`)
})
