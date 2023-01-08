const log4js = require('log4js')
require('dotenv').config()
// const path = require('node:path');
// const uri2path = require('file-uri-to-path');
// const __filename = uri2path(import.meta.url);
// const __dirname = path.dirname(__filename);

log4js.configure({
    appenders: {
        terminal: {type: 'console'},
        warnFile: {type: 'file', filename: 'warn.log' },
        errorFile: {type: 'file', filename: 'error.log' },
        loggerInfo: {type: 'logLevelFilter', appender: 'terminal', level: 'info'}, // los logs en terminal se van a logear desde info en adelante
        loggerWarn: {type: 'logLevelFilter', appender: 'warnFile', level: 'warn', maxLevel:'warn'}, // estos logs se logean en el archivo warn.log (el nivel 'warn' solamente)
        loggerError: {type: 'logLevelFilter', appender: 'errorFile', level: 'error', maxLevel: 'error'} // estos logs se logean en el archivo error.log (el nivel 'error' solamente)
    },
    categories: {
        default: {appenders: ['terminal', 'loggerWarn', 'loggerError'], level: 'info'}
    }
})

const logger = log4js.getLogger();

module.exports = logger








// IGNORAR
////////////////---------------------------------------------------------------------------------------------------
// log4js.configure({
//     appenders: {
//       consola: { type: 'console' },
//       archivoErrores: { type: 'file', filename: 'errores.log' },
//       archivoDebug: { type: 'file', filename: 'debug.log' },
//       loggerConsola: { type: 'logLevelFilter', appender: 'consola', level: 'info' },
//       loggerArchivoErrores: { type: 'logLevelFilter', appender: 'archivoErrores', level: 'error' },
//       loggerArchivoDebug: { type: 'logLevelFilter', appender: 'archivoDebug', level: 'debug' }
//     },
//     categories: {
//       default: {
//         appenders: ['loggerConsola'], level: 'all'
//       },
//       prod: {
//         appenders: ['loggerArchivoErrores', 'loggerArchivoDebug'], level: 'all'
//       }
//     }
//   })
  
//   let logger = null
  
//   if (process.env.NODE_ENV === 'production') {
//     logger = log4js.getLogger('prod');
//   } else {
//     logger = log4js.getLogger();
//   }
  
//   module.exports = logger