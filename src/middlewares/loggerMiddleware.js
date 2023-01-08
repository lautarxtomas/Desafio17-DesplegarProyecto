const logger = require('../loggers/Log4jsLogger')

function loggerMiddleware(req, _res, next) {
    logger.info(`[${req.method}] ${req.originalUrl}`)
    next();
}

module.exports = loggerMiddleware