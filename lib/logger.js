var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({level: 'error', timestamp: true}),
    new winston.transports.File({level: 'verbose', timestamp: true, filename: "log/raven.log"})
  ],
  exceptionHandlers: [
      new winston.transports.File({ filename: 'log/raven_exceptions.log' })
    ]
});

logger.info("Logging started in raven.");

exports.logger = logger;
