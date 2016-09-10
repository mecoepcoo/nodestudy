var server = require('./begin/server');
var router = require('./begin/router');
var requestHandlers = require('./begin/requestHandlers')

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

