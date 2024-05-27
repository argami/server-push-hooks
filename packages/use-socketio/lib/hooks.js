"use strict";
exports.__esModule = true;
exports.useLastMessage = exports.useSocket = void 0;
var react_1 = require("react");
var context_1 = require("./context");
var useSocket = function (eventKey, callback) {
    var socket = (0, react_1.useContext)(context_1.SocketIOContext);
    var callbackRef = (0, react_1.useRef)(callback);
    callbackRef.current = callback;
    var socketHandlerRef = (0, react_1.useRef)(function () {
        if (callbackRef.current) {
            callbackRef.current.apply(this, arguments);
        }
    });
    var subscribe = function () {
        if (eventKey) {
            socket.on(eventKey, socketHandlerRef.current);
        }
    };
    var unsubscribe = function () {
        if (eventKey) {
            socket.removeListener(eventKey, socketHandlerRef.current);
        }
    };
    (0, react_1.useEffect)(function () {
        subscribe();
        return unsubscribe;
    }, [eventKey]);
    return { socket: socket, unsubscribe: unsubscribe, subscribe: subscribe };
};
exports.useSocket = useSocket;
var useLastMessage = function (eventKey) {
    var socket = (0, react_1.useContext)(context_1.SocketIOContext);
    var _a = (0, react_1.useState)(), data = _a[0], setData = _a[1];
    var subscribe = function () {
        if (eventKey) {
            socket.on(eventKey, setData);
        }
    };
    var unsubscribe = function () {
        if (eventKey) {
            socket.removeListener(eventKey, setData);
        }
    };
    (0, react_1.useEffect)(function () {
        subscribe();
        return unsubscribe;
    }, [eventKey]);
    return { data: data, socket: socket, unsubscribe: unsubscribe, subscribe: subscribe };
};
exports.useLastMessage = useLastMessage;
